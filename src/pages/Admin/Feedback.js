import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { deleteItem } from '../../supabaseService';
import { Table, Th, Td, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { useAdminData } from '../../hooks/useAdminData';

const Feedback = () => {
  const { t } = useTranslation();
  const { data, loading, refreshData } = useAdminData();
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    if (data) setFeedback(data.feedback);
  }, [data]);

  const handleDelete = async (id) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'feedback', id });
        toast.success(t('admin.feedbackDeleteSuccess'));
        refreshData();
      } catch (error) {
        toast.error(t('admin.feedbackDeleteError'));
      }
    }
  };

  if (loading) return <div>{t('admin.loading')}</div>;

  return (
    <div>
      <h2>{t('admin.feedback')}</h2>
      <Table>
        <thead>
          <Tr>
            <Th>{t('admin.name')}</Th>
            <Th>{t('admin.email')}</Th>
            <Th>{t('admin.rating')}</Th>
            <Th>{t('admin.message')}</Th>
            <Th>{t('admin.actions')}</Th>
          </Tr>
        </thead>
        <tbody>
          {feedback.map((item) => (
            <Tr key={item.id}>
              <Td>{item.name}</Td>
              <Td>{item.email}</Td>
              <Td>{item.rating}</Td>
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

export default Feedback;
