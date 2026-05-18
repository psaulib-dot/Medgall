import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAllAdminData, upsertItem, deleteItem } from '../../supabaseService';
import { toast } from 'react-toastify';

const ManagementContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #c6a75e;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b89450;
  }
`;

const AddButton = styled(Button)`
  margin-bottom: 20px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  width: 500px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PlaceManagement = () => {
  const { t } = useTranslation();
  const [places, setPlaces] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const { places, categories } = await getAllAdminData();
    setPlaces(places);
    setCategories(categories);
    setLoading(false);
  };

  const handleSave = async (placeData) => {
    try {
      await upsertItem({ tableName: 'places', item: placeData });
      fetchData();
      setShowModal(false);
      toast.success(t('admin.placeSaveSuccess'));
    } catch (error) {
      toast.error(t('admin.placeSaveError'));
    }
  };

  const handleDelete = async (placeId) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'places', id: placeId });
        fetchData();
        toast.success(t('admin.placeDeleteSuccess'));
      } catch (error) {
        toast.error(t('admin.placeDeleteError'));
      }
    }
  };

  return (
    <ManagementContainer>
      <AddButton onClick={() => { setSelectedPlace(null); setShowModal(true); }}>{t('admin.addPlace')}</AddButton>
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>{t('admin.placeNameAr')}</th>
              <th>{t('admin.placeNameEn')}</th>
              <th>{t('admin.category')}</th>
              <th>{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place) => (
              <tr key={place.id}>
                <td>{place.name_ar}</td>
                <td>{place.name_en}</td>
                <td>{place.category}</td>
                <td>
                  <Button onClick={() => { setSelectedPlace(place); setShowModal(true); }}>{t('admin.edit')}</Button>
                  <Button onClick={() => handleDelete(place.id)} style={{ marginLeft: '10px' }}>{t('admin.delete')}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {showModal && (
        <Modal>
          <ModalContent>
            <h2>{selectedPlace ? t('admin.editPlace') : t('admin.addPlace')}</h2>
            <PlaceForm place={selectedPlace} categories={categories} onSave={handleSave} onCancel={() => setShowModal(false)} />
          </ModalContent>
        </Modal>
      )}
    </ManagementContainer>
  );
};

const PlaceForm = ({ place, categories, onSave, onCancel }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ...place });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Input name="name_ar" defaultValue={formData?.name_ar} onChange={handleChange} placeholder={t('admin.placeNameAr')} />
      <Input name="name_en" defaultValue={formData?.name_en} onChange={handleChange} placeholder={t('admin.placeNameEn')} />
      <Select name="category_id" defaultValue={formData?.category_id} onChange={handleChange}>
        {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name_en}</option>)}
      </Select>
      <Button onClick={() => onSave(formData)}>{t('admin.save')}</Button>
      <Button onClick={onCancel} style={{ marginLeft: '10px' }}>{t('admin.cancel')}</Button>
    </div>
  );
};

export default PlaceManagement;
