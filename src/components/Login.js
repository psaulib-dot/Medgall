import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { isSupabaseConfigured, signInUser } from '../supabaseService';
import { toastSuccess, toastError } from '../toast';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  background: linear-gradient(135deg, var(--medhal-cream) 0%, #e8dcc8 100%);
  padding: var(--spacing-xl) var(--spacing-md);

  @media (min-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`;

const LoginForm = styled.form`
  background: linear-gradient(145deg, var(--medhal-white) 0%, #faf8f5 100%);
  padding: var(--spacing-2xl) var(--spacing-lg);
  border-radius: var(--radius-2xl);
  box-shadow: 0 16px 40px rgba(139, 90, 43, 0.15);
  width: 100%;
  max-width: 420px;
  border: 2px solid var(--medhal-gold-light);

  @media (min-width: 768px) {
    padding: 44px 40px;
  }

  @media (max-width: 480px) {
    padding: var(--spacing-xl) var(--spacing-md);
    border-radius: var(--radius-xl);
  }
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
  padding-inline-end: ${({ $hasIcon }) => ($hasIcon ? '48px' : 'var(--spacing-md)')};
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

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

const PasswordToggle = styled.button`
  position: absolute;
  inset-inline-end: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--medhal-gold-dark);
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);

  &:hover {
    color: #6B4423;
  }

  svg {
    font-size: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: var(--spacing-xl) 0 0 0;
  width: 100%;
`;

const Button = styled.button`
  width: 50%;
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

  @media (max-width: 480px) {
    width: 70%;
    padding: var(--spacing-md) var(--spacing-md);
    font-size: var(--font-size-sm);
  }
`;

const SignupLink = styled.div`
  margin-top: var(--spacing-lg);
  text-align: center;
  font-family: var(--font-family-primary);

  p {
    color: var(--medhal-text-secondary);
    margin: 0 0 var(--spacing-sm);
    font-size: var(--font-size-sm);
  }

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

const Login = ({ onLogin = () => {} }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSupabaseConfigured) {
        const { authData, profile } = await signInUser({ email, password });
        localStorage.setItem('authToken', authData.access_token);
        localStorage.setItem('userRole', profile?.role || 'visitor');
        localStorage.setItem('userEmail', profile?.email || email);
        localStorage.setItem('userName', profile?.username || email);
        onLogin(profile?.role || 'visitor');
        toastSuccess(isArabic ? 'تم تسجيل الدخول بنجاح' : 'Logged in successfully');
        navigate('/acplaces');
        return;
      }

      const existingUser = JSON.parse(localStorage.getItem('medhalUsers') || '[]').find((user) => user.email === email && user.password === password);

      if (!existingUser) {
        toastError(isArabic ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة' : 'Invalid email or password');
        setLoading(false);
        return;
      }

      const token = `local-${Date.now()}`;
      localStorage.setItem('authToken', token);
      localStorage.setItem('userRole', existingUser.role || 'visitor');
      localStorage.setItem('userEmail', existingUser.email);
      localStorage.setItem('userName', existingUser.username || existingUser.email);
      onLogin(existingUser.role || 'visitor');
      toastSuccess(isArabic ? 'تم تسجيل الدخول بنجاح' : 'Logged in successfully');
      navigate('/acplaces');
    } catch (err) {
      toastError(err.message || (isArabic ? 'تعذر تسجيل الدخول' : 'Login failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer dir={isArabic ? 'rtl' : 'ltr'}>
      <LoginForm onSubmit={handleSubmit}>
        <Title>{t('login.title') || 'Login'}</Title>
        <InputWrapper>
          <Input
            type="email"
            placeholder={t('login.username') || 'Enter email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
        </InputWrapper>
        <InputWrapper>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder={t('login.password') || 'Enter password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            $hasIcon
            disabled={loading}
          />
          <PasswordToggle
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={loading}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </PasswordToggle>
        </InputWrapper>
        <ButtonWrapper>
          <Button type="submit" disabled={loading}>
            {loading ? (t('login.loading') || 'Loading...') : (t('login.submit') || 'Login')}
          </Button>
        </ButtonWrapper>

        <SignupLink>
          <p>{t('login.noAccount') || "Don't have an account?"}</p>
          <Link to="/signup">{t('login.signUp') || 'Sign Up'}</Link>
        </SignupLink>

        <SignupLink>
          <Link to="/forgot">{t('login.forgotPassword') || 'Forgot Password?'}</Link>
        </SignupLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
