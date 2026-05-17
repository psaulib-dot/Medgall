import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import styled from 'styled-components';
import ImageUpload from '../components/ImageUpload';

const CityManagementContainer = styled.div`
  padding: 2rem;
`;

const CityForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const CityTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }
`;

const EditButton = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
`;

const DeleteButton = styled.button`
    background-color: #f44336;
    color: white;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
`;

const CityManagement = () => {
  const [cities, setCities] = useState([]);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [editingCity, setEditingCity] = useState(null);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    const { data, error } = await supabase.from('cities').select('*');
    if (error) console.error('Error fetching cities:', error);
    else setCities(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCity) {
      const { data, error } = await supabase
        .from('cities')
        .update({ name, image_url: imageUrl })
        .eq('id', editingCity.id);
      if (error) console.error('Error updating city:', error);
      else {
        setCities(cities.map(c => c.id === editingCity.id ? data[0] : c));
        setEditingCity(null);
      }
    } else {
      const { data, error } = await supabase
        .from('cities')
        .insert([{ name, image_url: imageUrl }]);
      if (error) console.error('Error creating city:', error);
      else {
        setCities([...cities, data[0]]);
      }
    }
    setName('');
    setImageUrl('');
  };

  const handleEdit = (city) => {
    setEditingCity(city);
    setName(city.name);
    setImageUrl(city.image_url);
  }

  const handleDelete = async (id) => {
    const { error } = await supabase.from('cities').delete().eq('id', id);
    if (error) console.error('Error deleting city:', error);
    else setCities(cities.filter(c => c.id !== id));
  }

  return (
    <CityManagementContainer>
      <h2>City Management</h2>
      <CityForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <ImageUpload onUpload={setImageUrl} bucketName="city-images"/>
        <button type="submit">{editingCity ? 'Update City' : 'Create City'}</button>
      </CityForm>
      <CityTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cities.map(city => (
            <tr key={city.id}>
              <td>{city.name}</td>
              <td><img src={city.image_url} alt={city.name} width="100"/></td>
              <td>
                <EditButton onClick={() => handleEdit(city)}>Edit</EditButton>
                <DeleteButton onClick={() => handleDelete(city.id)}>Delete</DeleteButton>
              </td>
            </tr>
          ))}
        </tbody>
      </CityTable>
    </CityManagementContainer>
  );
};

export default CityManagement;
