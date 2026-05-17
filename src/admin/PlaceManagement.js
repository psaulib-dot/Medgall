import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import styled from 'styled-components';
import ImageUpload from '../components/ImageUpload';

const PlaceManagementContainer = styled.div`
  /* Add your styles here */
`;

const PlaceForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const PlaceManagement = () => {
  const [places, setPlaces] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [cityId, setCityId] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchPlaces();
    fetchCities();
    fetchCategories();
  }, []);

  const fetchPlaces = async () => {
    const { data, error } = await supabase.from('places').select('*');
    if (error) console.error('Error fetching places:', error);
    else setPlaces(data);
  };

  const fetchCities = async () => {
    const { data, error } = await supabase.from('cities').select('*');
    if (error) console.error('Error fetching cities:', error);
    else setCities(data);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) console.error('Error fetching categories:', error);
    else setCategories(data);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('places')
      .insert([{ name, description, image_url: imageUrl, city_id: cityId, category_id: categoryId }]);
    if (error) console.error('Error creating place:', error);
    else {
      setPlaces([...places, data[0]]);
      setName('');
      setDescription('');
      setImageUrl('');
      setCityId('');
      setCategoryId('');
    }
  };

  return (
    <PlaceManagementContainer>
      <h2>Place Management</h2>
      <PlaceForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
            <option value="">Select a city</option>
            {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
            ))}
        </select>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option value="">Select a category</option>
            {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))}
        </select>
        <ImageUpload onUpload={setImageUrl} bucketName="place-images"/>
        <button type="submit">Create Place</button>
      </PlaceForm>
      <ul>
        {places.map(place => (
          <li key={place.id}>{place.name}</li>
        ))}
      </ul>
    </PlaceManagementContainer>
  );
};

export default PlaceManagement;
