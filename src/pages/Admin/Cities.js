import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { upsertItem, deleteItem } from '../../supabaseService';
import { Table, Th, Td, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAdminData } from '../../hooks/useAdminData';

const Cities = () => {
  const { t } = useTranslation();
  const { data, loading, refreshData } = useAdminData();
  const [cities, setCities] = useState([]);
  const [editingCity, setEditingCity] = useState(null);

  useEffect(() => {
    if (data) setCities(data.cities);
  }, [data]);

  const handleSave = async (city) => {
    try {
      await upsertItem({ tableName: 'cities', item: city });
      toast.success(t('admin.citySaveSuccess'));
      setEditingCity(null);
      refreshData();
    } catch (error) {
      toast.error(t('admin.citySaveError'));
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'cities', id });
        toast.success(t('admin.cityDeleteSuccess'));
        refreshData();
      } catch (error) {
        toast.error(t('admin.cityDeleteError'));
      }
    }
  };

  if (loading) return <div>{t('admin.loading')}</div>;

  return (
    <div>
      <h2>{t('admin.cities')}</h2>
      <Button onClick={() => setEditingCity({ name_ar: '', name_en: '' })}>{t('admin.addCity')}</Button>
      <Table>
        <thead>
          <Tr>
            <Th>{t('admin.cityNameAr')}</Th>
            <Th>{t('admin.cityNameEn')}</Th>
            <Th>{t('admin.actions')}</Th>
          </Tr>
        </thead>
        <tbody>
          {cities.map((city) => (
            <Tr key={city.id}>
              <Td>{editingCity?.id === city.id ? <Input value={editingCity.name_ar} onChange={(e) => setEditingCity({...editingCity, name_ar: e.target.value})} /> : city.name_ar}</Td>
              <Td>{editingCity?.id === city.id ? <Input value={editingCity.name_en} onChange={(e) => setEditingCity({...editingCity, name_en: e.target.value})} /> : city.name_en}</Td>
              <Td>
                {editingCity?.id === city.id ? (
                  <>
                    <Button onClick={() => handleSave(editingCity)}>{t('admin.save')}</Button>
                    <Button onClick={() => setEditingCity(null)}>{t('admin.cancel')}</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => setEditingCity(city)}>{t('admin.edit')}</Button>
                    <Button onClick={() => handleDelete(city.id)}>{t('admin.delete')}</Button>
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

export default Cities;
