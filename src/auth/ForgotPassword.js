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
  background-color: #F7F4EE;
  padding: var(--spacing-xl) var(--spacing-md);

  @media (max-width: 480px) {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`;

const ForgotForm = styled.form`
  background: linear-gradient(145deg, var(--medhal-white) 0%, #faf8f5 100%);
  padding: var(--spacing-2xl) var(--spacing-lg);
  border-radius: var(--radius-2xl);
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  width: 100%;
  max-width: 420px;
  border: 2px solid var(--medhal-gold-light);
  text-align: center;

  @media (min-width: 768px) {
    padding: 44px 40px;
  }

  @media (max-width: 480px) {
    padding: var(--spacing-xl) var(--spacing-md);
    border-radius: var(--radius-xl);
  }
`;

const Logo = styled.img`
  width: 100px;
  margin: 0 auto var(--spacing-lg);
`;

const Title = styled.h2`
  color: var(--medhal-gold-dark);
  margin: 0 0 var(--spacing-lg);
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-primary);
  line-height: var(--line-height-tight);

  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-md);
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: var(--spacing-lg);
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md) var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 2px solid var(--medhal-gold-light);
  box-sizing: border-box;
  font-size: var(--font-size-base);
  background-color: var(--medhal-white);
  color: var(--medhal-text-secondary);
  transition: all var(--transition-base);
  font-family: var(--font-family-primary);

  &:focus {
    outline: none;
    border-color: var(--medhal-gold-dark);
    box-shadow: 0 0 0 4px rgba(139, 90, 43, 0.1);
  }

  &::placeholder {
    color: #A89580;
  }
`;

const Button = styled.button`
  width: 70%;
  padding: var(--spacing-md) var(--spacing-lg);
  background: linear-gradient(135deg, var(--medhal-gold-dark) 0%, #6B4423 100%);
  color: var(--medhal-white);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: all var(--transition-base);
  box-shadow: 0 4px 12px rgba(139, 90, 43, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 90, 43, 0.4);
    background: linear-gradient(135deg, #6B4423 0%, #5A3820 100%);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const LoginLink = styled.div`
  margin-top: var(--spacing-lg);
  text-align: center;
  font-family: var(--font-family-primary);

  a {
    color: var(--medhal-gold-dark);
    text-decoration: none;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    transition: color var(--transition-fast);

    &:hover {
      color: #6B4423;
      text-decoration: underline;
    }
  }
`;

const ForgotPassword = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toastError(t('forgot.errorEmailRequired') || 'Please enter your email');
      return;
    }

    try {
      setLoading(true);
      if (!isSupabaseConfigured) {
        throw new Error(t('forgot.supabaseNotConfigured') || 'Supabase not configured');
      }

      await sendPasswordResetEmail(email);
      toastSuccess(t('forgot.success') || 'Check your email for password reset link');
      setEmail('');
    } catch (err) {
      toastError(err.message || t('forgot.failure') || 'Failed to send reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ForgotContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <ForgotForm onSubmit={handleSubmit}>
        <Logo src="/logo.png" alt="Medhal Logo" />
        <Title>{t('forgot.title') || 'Reset Password'}</Title>
        <InputWrapper>
          <Input
            type="email"
            placeholder={t('forgot.email') || 'Enter your email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </InputWrapper>

        <Button type="submit" disabled={loading}>
          {loading ? (t('forgot.loading') || 'Sending...') : (t('forgot.submit') || 'Send Reset Link')}
        </Button>

        <LoginLink>
          <Link to="/login">{t('forgot.backToLogin') || 'Back to Login'}</Link>
        </LoginLink>
      </ForgotForm>
    </ForgotContainer>
  );
};

export default ForgotPassword;
