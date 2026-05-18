import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { addContactMessage } from '../supabaseService'; 
import { useAuth } from '../hooks/useAuth';

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-color: var(--medhal-cream);
  width: 100%;
  
`;

const FormCard = styled.div`
  background: #FFFFFF;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 550px;
  border: 1px solid #E5E5E5;
`;

const Title = styled.h1`
  text-align: center;
  color: #0F1C2E;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
  font-family: '29LT Riwaya', sans-serif;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #C6A75E;
    margin: 10px auto 30px;
    border-radius: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #C6A75E;
    box-shadow: 0 0 0 3px rgba(198, 167, 94, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: 1px solid #DCDCDC;
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #C6A75E;
    box-shadow: 0 0 0 3px rgba(198, 167, 94, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 16px;
  border-radius: 8px;
  background-color: #0F1C2E;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #1A2B42;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #B0B0B0;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({ ...prev, name: user.username || '', email: user.email || '' }));
    }
  }, [user]);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error(t('contact.validation.nameRequired'));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      toast.error(t('contact.validation.emailInvalid'));
      return false;
    }
    if (!formData.message.trim()) {
      toast.error(t('contact.validation.messageRequired'));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const toastId = toast.loading(t('contact.submitting'));

    try {
      await addContactMessage(formData);
      toast.update(toastId, {
        render: t('contact.success'),
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      });
      setFormData({ name: user ? user.username : '', email: user ? user.email : '', message: '' });
    } catch (error) {
      console.error("Contact form submission error:", error);
      const errorMessage = error.message.includes('security policy') 
        ? t('contact.error.rls') 
        : t('contact.error.generic');
      
      toast.update(toastId, {
        render: errorMessage,
        type: 'error',
        isLoading: false,
        autoClose: 7000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <ContactContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <FormCard>
        <Title>{t('contact.title')}</Title>
        <Form onSubmit={handleSubmit} noValidate>
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
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? t('contact.submitting') : t('contact.form.submit')}
          </SubmitButton>
        </Form>
      </FormCard>
    </ContactContainer>
  );
};

export default Contact;
