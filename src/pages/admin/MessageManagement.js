import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getContactMessages, deleteItem } from '../../supabaseService';
import { toast } from 'react-toastify';

const ManagementContainer = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #c6a75e;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b89450;
  }
`;

const MessageManagement = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    const messagesData = await getContactMessages();
    setMessages(messagesData);
    setLoading(false);
  };

  const handleDelete = async (messageId) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'contact_messages', id: messageId });
        fetchMessages();
        toast.success(t('admin.messageDeleteSuccess'));
      } catch (error) {
        toast.error(t('admin.messageDeleteError'));
      }
    }
  };

  return (
    <ManagementContainer>
      {loading ? (
        <p>{t('loading')}</p>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>{t('admin.name')}</th>
              <th>{t('admin.email')}</th>
              <th>{t('admin.subject')}</th>
              <th>{t('admin.message')}</th>
              <th>{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message) => (
              <tr key={message.id}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.subject}</td>
                <td>{message.message}</td>
                <td>
                  <Button onClick={() => handleDelete(message.id)}>{t('admin.delete')}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ManagementContainer>
  );
};

export default MessageManagement;
