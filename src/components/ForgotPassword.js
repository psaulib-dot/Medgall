import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { isSupabaseConfigured, sendPasswordResetEmail } from '../supabaseService';
import { toastSuccess, toastError } from '../toast';

const ForgotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
  padding: 32px 16px 40px;
`;

const ForgotForm = styled.form`
  background: linear-gradient(145deg, #ffffff 0%, #faf8f5 100%);
  padding: 36px 24px;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  width: 100%;
  max-width: 420px;
  border: 2px solid #C6A75E;

  @media (min-width: 768px) {
    padding: 44px 40px;
  }
`;

const Title = styled.h2`
  color: #8B5A2B;
  margin: 0 0 28px;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  font-family: 'Georgia', serif;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 12px;
  border: 2px solid #D4B896;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #ffffff;
  color: #5A4A3A;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;

  &:focus {
    outline: none;
    border-color: #8B5A2B;
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }
`;

const Button = styled.button`
  width: 100%;
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
`;

const LoginLink = styled.div`
  margin-top: 24px;
  text-align: center;
  font-family: 'Georgia', serif;

  a {
    color: #8B5A2B;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: #6B4423;
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toastError(t('forgot.errorEmailRequired'));
      return;
    }

    try {
      if (!isSupabaseConfigured) {
        throw new Error(t('forgot.supabaseNotConfigured'));
      }

      await sendPasswordResetEmail(email);
      toastSuccess(t('forgot.success'));
    } catch (err) {
      toastError(err.message || t('forgot.failure'));
    }
  };

  return (
    <ForgotContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <ForgotForm onSubmit={handleSubmit}>
        <Title>{t('forgot.title')}</Title>
        <InputWrapper>
          <Input
            type="email"
            placeholder={t('forgot.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>

        <Button type="submit">{t('forgot.submit')}</Button>

        <LoginLink>
          <Link to="/login">{t('forgot.backToLogin')}</Link>
        </LoginLink>
      </ForgotForm>
    </ForgotContainer>
  );
};

export default ForgotPassword;
