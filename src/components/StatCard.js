import styled from 'styled-components';

export const StatCard = styled.div`
  background: ${props => props.color || '#fff'};
  color: ${props => (props.color === '#E5D4A8' ? '#333' : '#fff')};
  padding: 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export const StatIcon = styled.div`
  font-size: 40px;
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

export const StatValue = styled.span`
  font-size: 32px;
  font-weight: 700;
`;
