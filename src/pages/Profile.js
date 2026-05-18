import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getCurrentUserProfile } from '../supabaseService';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaShieldAlt } from 'react-icons/fa';

const ProfilePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 80px 16px;
  background: #F4F1ED;
  font-family: '29LT Riwaya', sans-serif;
`;

const ProfileCard = styled.div`
  background: #FFFFFF;
  padding: 48px;
  border-radius: 24px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 600px;
  text-align: center;
  direction: ${props => props.dir};
`;

const Title = styled.h1`
  font-size: 36px;
  color: #8B5A2B;
  margin-bottom: 16px;
  font-weight: 700;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 3px;
    background: linear-gradient(to right, #C6A75E, #8B5A2B);
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const InfoSection = styled.div`
  margin-top: 40px;
  text-align: ${props => props.dir === 'rtl' ? 'right' : 'left'};
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  font-size: 18px;
`;

const Icon = styled.div`
  color: #C6A75E;
  font-size: 24px;
`;

const Label = styled.span`
  font-weight: 700;
  color: #8B5A2B;
`;

const Value = styled.span`
  color: #333;
`;

const AdminSection = styled.div`
  margin-top: 40px;
  padding: 24px;
  background: #F9F5F0;
  border-radius: 12px;
  border: 1px dashed #C6A75E;
`;

const AdminLink = styled(Link)`
  display: inline-block;
  margin-top: 16px;
  padding: 12px 24px;
  background: linear-gradient(to right, #8B5A2B, #C6A75E);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(198, 167, 94, 0.3);
  }
`;

const EmptyState = styled.p`
  color: #6B4423;
  text-align: center;
  font-size: 18px;
  margin-top: 40px;
`;

const Profile = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getCurrentUserProfile();
      setProfile(userProfile);
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (!profile) {
    return (
      <ProfilePage>
        <ProfileCard dir={isArabic ? 'rtl' : 'ltr'}>
          <Title>{t('profile.title')}</Title>
          <EmptyState>{t('profile.notLoggedIn')}</EmptyState>
        </ProfileCard>
      </ProfilePage>
    );
  }

  return (
    <ProfilePage>
      <ProfileCard dir={isArabic ? 'rtl' : 'ltr'}>
        <Title>{t('profile.title')}</Title>
        <InfoSection dir={isArabic ? 'rtl' : 'ltr'}>
          <InfoRow>
            <Icon><FaUser /></Icon>
            <Label>{t('profile.username')}:</Label>
            <Value>{profile.username}</Value>
          </InfoRow>
          <InfoRow>
            <Icon><FaEnvelope /></Icon>
            <Label>{t('profile.email')}:</Label>
            <Value>{profile.email}</Value>
          </InfoRow>
          <InfoRow>
            <Icon><FaShieldAlt /></Icon>
            <Label>{t('profile.role')}:</Label>
            <Value>{t(`roles.${profile.role}`)}</Value>
          </InfoRow>
        </InfoSection>

        {profile.role === 'admin' && (
          <AdminSection>
            <h3>{t('profile.admin.title')}</h3>
            <p>{t('profile.admin.description')}</p>
            <AdminLink to="/admin">{t('profile.admin.link')}</AdminLink>
          </AdminSection>
        )}
      </ProfileCard>
    </ProfilePage>
  );
};

export default Profile;
