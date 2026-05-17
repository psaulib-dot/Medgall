import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { isSupabaseConfigured, signUpUser } from '../supabaseService';
import { toastSuccess, toastError } from '../toast';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
  padding: 32px 16px 40px;

  @media (min-width: 768px) {
    padding: 40px 32px 60px;
  }
`;

const SignUpForm = styled.form`
  background: linear-gradient(145deg, #ffffff 0%, #faf8f5 100%);
  padding: 36px 24px;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  width: 100%;
  max-width: 440px;
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
  padding-inline-end: ${({ $hasIcon }) => ($hasIcon ? '48px' : '16px')};
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

const PasswordToggle = styled.button`
  position: absolute;
  inset-inline-end: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #8B5A2B;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;

  &:hover {
    color: #6B4423;
  }

  svg {
    font-size: 20px;
  }
`;

const Button = styled.button`
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

const LoginLink = styled.div`
  margin-top: 24px;
  text-align: center;
  font-family: 'Georgia', serif;

  p {
    color: #5A4A3A;
    margin: 0 0 8px;
    font-size: 14px;
  }

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

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toastError(isArabic ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match');
      return;
    }

    try {
      if (isSupabaseConfigured) {
        const authData = await signUpUser({ username, email, password });
        if (authData?.user && !authData.user?.confirmed_at && !authData.user?.email_confirmed_at) {
          toastSuccess(t('signup.verifyEmailNotice') || 'Check your email to verify your account');
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          return;
        }

        toastSuccess(isArabic ? 'تم إنشاء الحساب بنجاح' : 'Account created successfully');
        navigate('/login');
        return;
      }

      const users = JSON.parse(localStorage.getItem('medhalUsers') || '[]');
      if (users.some((user) => user.email === email)) {
        toastError(isArabic ? 'هذا البريد مسجل مسبقاً' : 'This email is already registered');
        return;
      }

      const newUser = { username, email, password, role: 'visitor', createdAt: new Date().toISOString() };
      localStorage.setItem('medhalUsers', JSON.stringify([...users, newUser]));
      toastSuccess(isArabic ? 'تم إنشاء الحساب بنجاح' : 'Account created successfully');
      navigate('/login');
    } catch (err) {
      toastError(err.message || (isArabic ? 'تعذر إنشاء الحساب' : 'Sign up failed'));
    }
  };

  return (
    <SignUpContainer dir={isArabic ? 'rtl' : 'ltr'}>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>{t('signup.title')}</Title>
        <InputWrapper>
          <Input
            type="text"
            placeholder={t('signup.username')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type="email"
            placeholder={t('signup.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={t('signup.password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            $hasIcon
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </PasswordToggle>
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder={t('signup.confirmPassword')}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            $hasIcon
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </PasswordToggle>
        </InputWrapper>
        <Button type="submit">{t('signup.submit')}</Button>

        <LoginLink>
          <p>{t('signup.alreadyHaveAccount')}</p>
          <Link to="/login">{t('signup.login')}</Link>
        </LoginLink>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
