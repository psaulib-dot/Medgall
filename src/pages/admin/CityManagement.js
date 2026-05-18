import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getTourismGuideData, upsertItem, deleteItem } from '../../supabaseService';
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

const CityManagement = () => {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    setLoading(true);
    const { cities } = await getTourismGuideData();
    setCities(Object.values(cities));
    setLoading(false);
  };

  const handleSave = async (cityData) => {
    try {
      await upsertItem({ tableName: 'cities', item: cityData });
      fetchCities();
      setShowModal(false);
      toast.success(t('admin.citySaveSuccess'));
    } catch (error) {
      toast.error(t('admin.citySaveError'));
    }
  };

  const handleDelete = async (cityId) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'cities', id: cityId });
        fetchCities();
        toast.success(t('admin.cityDeleteSuccess'));
      } catch (error) {
        toast.error(t('admin.cityDeleteError'));
      }
    }
  };

  return (
    <ManagementContainer>
      <AddButton onClick={() => { setSelectedCity(null); setShowModal(true); }}>{t('admin.addCity')}</AddButton>
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>{t('admin.cityNameAr')}</th>
              <th>{t('admin.cityNameEn')}</th>
              <th>{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {cities.map((city) => (
              <tr key={city.en.name}>
                <td>{city.ar.name}</td>
                <td>{city.en.name}</td>
                <td>
                  <Button onClick={() => { setSelectedCity(city); setShowModal(true); }}>{t('admin.edit')}</Button>
                  <Button onClick={() => handleDelete(city.id)} style={{ marginLeft: '10px' }}>{t('admin.delete')}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {showModal && (
        <Modal>
          <ModalContent>
            <h2>{selectedCity ? t('admin.editCity') : t('admin.addCity')}</h2>
            <CityForm city={selectedCity} onSave={handleSave} onCancel={() => setShowModal(false)} />
          </ModalContent>
        </Modal>
      )}
    </ManagementContainer>
  );
};

const CityForm = ({ city, onSave, onCancel }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ ...city });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Input name="name_ar" defaultValue={formData?.ar?.name} onChange={handleChange} placeholder={t('admin.cityNameAr')} />
      <Input name="name_en" defaultValue={formData?.en?.name} onChange={handleChange} placeholder={t('admin.cityNameEn')} />
      <Button onClick={() => onSave(formData)}>{t('admin.save')}</Button>
      <Button onClick={onCancel} style={{ marginLeft: '10px' }}>{t('admin.cancel')}</Button>
    </div>
  );
};

export default CityManagement;
