import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
`;

export const Th = styled.th`
  background-color: #0F1C2E;
  color: white;
  padding: 15px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
