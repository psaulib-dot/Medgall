
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px); // Adjust height based on your header/footer
  text-align: center;
  padding: 20px;
  font-family: '29LT Riwaya', sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #c6a75e; // Using the theme's primary color
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #fff;
  background-color: #c6a75e;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b59450; // A slightly darker shade for hover
  }
`;

const Unauthorized = () => {
  const { t } = useTranslation();

  return (
    <UnauthorizedContainer>
      <Title>{t('unauthorized.title')}</Title>
      <Message>{t('unauthorized.message')}</Message>
      <StyledLink to="/">{t('unauthorized.go_home')}</StyledLink>
    </UnauthorizedContainer>
  );
};

export default Unauthorized;
