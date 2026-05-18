import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { deleteItem } from '../../supabaseService';
import { Table, Th, Td, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { useAdminData } from '../../hooks/useAdminData';

const Messages = () => {
  const { t } = useTranslation();
  const { data, loading, refreshData } = useAdminData();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (data) setMessages(data.messages);
  }, [data]);

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'contact_messages', id });
        toast.success(t('admin.messageDeleteSuccess'));
        refreshData();
      } catch (error) {
        toast.error(t('admin.messageDeleteError'));
      }
    }
  };

  if (loading) return <div>{t('admin.loading')}</div>;

  return (
    <div>
      <h2>{t('admin.messages')}</h2>
      <Table>
        <thead>
          <Tr>
            <Th>{t('admin.name')}</Th>
            <Th>{t('admin.email')}</Th>
            <Th>{t('admin.subject')}</Th>
            <Th>{t('admin.message')}</Th>
            <Th>{t('admin.actions')}</Th>
          </Tr>
        </thead>
        <tbody>
          {messages.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.subject}</Td>
              <Td>{item.message}</Td>
              <Td>
                <Button onClick={() => handleDelete(item.id)}>{t('admin.delete')}</Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Messages;
