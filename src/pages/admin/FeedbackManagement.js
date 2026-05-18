import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getFeedback, deleteItem } from '../../supabaseService';
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

const FeedbackManagement = () => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    setLoading(true);
    const feedbackData = await getFeedback();
    setFeedback(feedbackData);
    setLoading(false);
  };

  const handleDelete = async (feedbackId) => {
    if (window.confirm(t('admin.confirmDelete'))) {
      try {
        await deleteItem({ tableName: 'feedback', id: feedbackId });
        fetchFeedback();
        toast.success(t('admin.feedbackDeleteSuccess'));
      } catch (error) {
        toast.error(t('admin.feedbackDeleteError'));
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
              <th>{t('admin.rating')}</th>
              <th>{t('admin.message')}</th>
              <th>{t('admin.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.rating}</td>
                <td>{item.message}</td>
                <td>
                  <Button onClick={() => handleDelete(item.id)}>{t('admin.delete')}</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ManagementContainer>
  );
};

export default FeedbackManagement;
