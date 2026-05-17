import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import styled from 'styled-components';
import ImageUpload from '../components/ImageUpload';

const CategoryManagementContainer = styled.div`
  /* Add your styles here */
`;

const CategoryForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) console.error('Error fetching categories:', error);
    else setCategories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('categories')
      .insert([{ name, image_url: imageUrl }]);
    if (error) console.error('Error creating category:', error);
    else {
      setCategories([...categories, data[0]]);
      setName('');
      setImageUrl('');
    }
  };

  return (
    <CategoryManagementContainer>
      <h2>Category Management</h2>
      <CategoryForm onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <ImageUpload onUpload={setImageUrl} bucketName="category-images"/>
        <button type="submit">Create Category</button>
      </CategoryForm>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </CategoryManagementContainer>
  );
};

export default CategoryManagement;
