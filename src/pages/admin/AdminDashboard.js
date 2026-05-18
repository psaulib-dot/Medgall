import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CityManagement from './CityManagement';
import PlaceManagement from './PlaceManagement';
import UserManagement from './UserManagement';
import FeedbackManagement from './FeedbackManagement';
import MessageManagement from './MessageManagement';
import { ToastContainer } from 'react-toastify';

const AdminContainer = styled.div`
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
  font-family: '29LT Riwaya', sans-serif;
`;

const Header = styled.h1`
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  padding: 15px 30px;
  margin: 0 10px;
  font-size: 18px;
  border: none;
  background-color: transparent;
  color: #555;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c6a75e;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover, &.active {
    color: #c6a75e;
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const ContentWrapper = styled.div`
  border: 1px dashed #ccc;
  padding: 20px;
  min-height: 300px;
  background-color: #fff;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
  padding: 20px;
`;

const AdminDashboard = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('cities');

  useEffect(() => {
    console.log('AdminDashboard mounted. Default tab: cities');
  }, []);

  const handleTabClick = (tab) => {
    console.log(`Switching to tab: ${tab}`);
    setActiveTab(tab);
  };

  const renderContent = () => {
    console.log(`Rendering content for tab: ${activeTab}`);
    try {
      switch (activeTab) {
        case 'cities':
          return <CityManagement />;
        case 'places':
          return <PlaceManagement />;
        case 'users':
          return <UserManagement />;
        case 'feedback':
          return <FeedbackManagement />;
        case 'messages':
          return <MessageManagement />;
        default:
          console.log('No active tab matched, returning null.');
          return null;
      }
    } catch (error) {
      console.error(`Error rendering component for tab ${activeTab}:`, error);
      return <ErrorMessage>An error occurred while loading this section. Check the console for details.</ErrorMessage>;
    }
  };

  return (
    <AdminContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <ToastContainer />
      <Header>{t('admin.dashboard')}</Header>
      <Tabs>
        <Tab onClick={() => handleTabClick('cities')} className={activeTab === 'cities' ? 'active' : ''}>{t('admin.cities')}</Tab>
        <Tab onClick={() => handleTabClick('places')} className={activeTab === 'places' ? 'active' : ''}>{t('admin.places')}</Tab>
        <Tab onClick={() => handleTabClick('users')} className={activeTab === 'users' ? 'active' : ''}>{t('admin.users')}</Tab>
        <Tab onClick={() => handleTabClick('feedback')} className={activeTab === 'feedback' ? 'active' : ''}>{t('admin.feedback')}</Tab>
        <Tab onClick={() => handleTabClick('messages')} className={activeTab === 'messages' ? 'active' : ''}>{t('admin.messages')}</Tab>
      </Tabs>
      <ContentWrapper>
        {renderContent()}
      </ContentWrapper>
    </AdminContainer>
  );
};

export default AdminDashboard;
