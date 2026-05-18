import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { upsertItem, deleteItem } from '../../supabaseService';
import { Table, Th, Td, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAdminData } from '../../hooks/useAdminData';

const Places = () => {
  const { t } = useTranslation();
  const { data, loading, refreshData } = useAdminData();
  const [places, setPlaces] = useState([]);
  const [editingPlace, setEditingPlace] = useState(null);

  useEffect(() => {
    if (data) setPlaces(data.places);
  }, [data]);

  const handleSave = async (place) => {
    try {
      await upsertItem({ tableName: 'places', item: place });
      toast.success(t('admin.placeSaveSuccess'));
      setEditingPlace(null);
      refreshData();
    } catch (error) {
      toast.error(t('admin.placeSaveError'));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'places', id });
        toast.success(t('admin.placeDeleteSuccess'));
        refreshData();
      } catch (error) {
        toast.error(t('admin.placeDeleteError'));
      }
    }
  };

  if (loading) return <div>{t('admin.loading')}</div>;

  return (
    <div>
      <h2>{t('admin.places')}</h2>
      <Button onClick={() => setEditingPlace({ name_ar: '', name_en: '', category: '' })}>{t('admin.addPlace')}</Button>
      <Table>
        <thead>
          <Tr>
            <Th>{t('admin.placeNameAr')}</Th>
            <Th>{t('admin.placeNameEn')}</Th>
            <Th>{t('admin.category')}</Th>
            <Th>{t('admin.actions')}</Th>
          </Tr>
        </thead>
        <tbody>
          {places.map((place) => (
            <Tr key={place.id}>
              <Td>{editingPlace?.id === place.id ? <Input value={editingPlace.name_ar} onChange={(e) => setEditingPlace({...editingPlace, name_ar: e.target.value})} /> : place.name_ar}</Td>
              <Td>{editingPlace?.id === place.id ? <Input value={editingPlace.name_en} onChange={(e) => setEditingPlace({...editingPlace, name_en: e.target.value})} /> : place.name_en}</Td>
              <Td>{editingPlace?.id === place.id ? <Input value={editingPlace.category} onChange={(e) => setEditingPlace({...editingPlace, category: e.target.value})} /> : place.category}</Td>
              <Td>
                {editingPlace?.id === place.id ? (
                  <>
                    <Button onClick={() => handleSave(editingPlace)}>{t('admin.save')}</Button>
                    <Button onClick={() => setEditingPlace(null)}>{t('admin.cancel')}</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => setEditingPlace(place)}>{t('admin.edit')}</Button>
                    <Button onClick={() => handleDelete(place.id)}>{t('admin.delete')}</Button>
                  </>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Places;
