import React, { useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ImagePreview = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: var(--radius-md);
  border: 1px solid var(--medhal-gold-light);
`;

const UploadButton = styled.label`
  background-color: var(--medhal-gold);
  color: var(--medhal-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: center;
  transition: background-color var(--transition-base);

  &:hover {
    background-color: var(--medhal-gold-dark);
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const ImageUpload = ({ onUpload, bucketName }) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const { t } = useTranslation();

  const handleUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) {
        throw new Error('You must select an image to upload.');
      }

      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const { publicURL, error: urlError } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      if (urlError) {
        throw urlError;
      }

      onUpload(publicURL);
      setPreview(publicURL);

    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadContainer>
      {preview && <ImagePreview src={preview} alt="Uploaded preview" />}
      <UploadButton htmlFor="single">
        {uploading ? t('Uploading...') : t('Upload Image')}
      </UploadButton>
      <HiddenInput
        type="file"
        id="single"
        accept="image/*"
        onChange={handleUpload}
        disabled={uploading}
      />
    </UploadContainer>
  );
};

export default ImageUpload;
