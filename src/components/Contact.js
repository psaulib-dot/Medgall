// Contact.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { submitContactMessage } from '../supabaseService';
import { toastSuccess, toastError } from '../toast';

const ContactContainer = styled.div`
  font-family: 'Georgia', serif;
  padding: 24px 16px 48px;
  background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h2`
  color: #8B5A2B;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
  text-align: center;
  font-family: 'Georgia', serif;
  position: relative;
  padding-bottom: 16px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #8B5A2B, #C6A75E);
    border-radius: 2px;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  background: linear-gradient(145deg, #ffffff 0%, #faf8f5 100%);
  padding: 32px 24px;
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  border: 2px solid #C6A75E;

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 44px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid #D4B896;
  font-size: 16px;
  background-color: #ffffff;
  color: #5A4A3A;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #8B5A2B;
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 20px;
  border-radius: 12px;
  border: 2px solid #D4B896;
  font-size: 16px;
  min-height: 160px;
  background-color: #ffffff;
  color: #5A4A3A;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  resize: vertical;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #8B5A2B;
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  margin: 24px auto 0;
  display: block;
  padding: 14px 24px;
  background: linear-gradient(135deg, #8B5A2B 0%, #6B4423 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  font-family: 'Georgia', serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 90, 43, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 90, 43, 0.4);
    background: linear-gradient(135deg, #6B4423 0%, #5A3820 100%);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 70%;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactMessage(formData);
      toastSuccess(t('contact.success') || 'Message sent successfully');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toastError(error.message || 'Unable to send message');
    }
  };

  return (
    <ContactContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Title>{t('contact.title')}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder={t('contact.form.name')}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder={t('contact.form.email')}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder={t('contact.form.message')}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">{t('contact.form.submit')}</SubmitButton>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
