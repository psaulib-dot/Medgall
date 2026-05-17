import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getCurrentUserProfile } from '../supabaseService';

const ProfileContainer = styled.div`
  min-height: calc(100vh - var(--header-height));
  padding: 32px 16px 48px;
  background: linear-gradient(135deg, #f5f0e8 0%, #e8dcc8 100%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 40px 24px 60px;
  }
`;

const ProfileCard = styled.div`
  width: 100%;
  max-width: 560px;
  background: linear-gradient(145deg, #ffffff 0%, #faf8f5 100%);
  border-radius: 24px;
  border: 2px solid #C6A75E;
  box-shadow: 0 20px 48px rgba(139, 90, 43, 0.16);
  padding: 36px 28px;
  font-family: 'Georgia', serif;
`;

const Heading = styled.h1`
  margin: 0 0 24px;
  font-size: 32px;
  font-weight: 700;
  color: #0F1C2E;
  text-align: center;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 20px;
`;

const Label = styled.span`
  color: #8B5A2B;
  font-weight: 700;
  width: 35%;
`;

const Value = styled.span`
  color: #4A4A4A;
  width: 65%;
  word-break: break-word;
`;

const EmptyState = styled.p`
  color: #6B4423;
  text-align: center;
  font-size: 18px;
  margin: 0;
`;

const Profile = () => {
  const { t, i18n } = useTranslation();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const storedProfile = getCurrentUserProfile();
    if (storedProfile?.email) {
      setProfile(storedProfile);
      return;
    }

    const fallbackProfile = {
      username: localStorage.getItem('userName') || '',
      email: localStorage.getItem('userEmail') || '',
      role: localStorage.getItem('userRole') || '',
    };

    if (fallbackProfile.email) {
      setProfile(fallbackProfile);
    }
  }, []);

  if (!profile?.email) {
    return (
      <ProfileContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <ProfileCard>
          <Heading>{t('profile.title') || 'Profile'}</Heading>
          <EmptyState>{t('profile.notLoggedIn') || 'No user is currently logged in.'}</EmptyState>
        </ProfileCard>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <ProfileCard>
        <Heading>{t('profile.heading') || 'Your Profile'}</Heading>
        <Field>
          <Label>{t('profile.username') || 'Username'}</Label>
          <Value>{profile.username || '-'}</Value>
        </Field>
        <Field>
          <Label>{t('profile.email') || 'Email'}</Label>
          <Value>{profile.email}</Value>
        </Field>
        <Field>
          <Label>{t('profile.role') || 'Role'}</Label>
          <Value>{profile.role || 'visitor'}</Value>
        </Field>
        <Field>
          <Label>{t('profile.source') || 'Profile Source'}</Label>
          <Value>{profile.id ? (t('profile.sourceSupabase') || 'Supabase / local stored profile') : (t('profile.sourceLocal') || 'Local fallback')}</Value>
        </Field>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
