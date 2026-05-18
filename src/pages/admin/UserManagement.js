import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAllAdminData, upsertItem } from '../../supabaseService';
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

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
`;

const UserManagement = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const { users } = await getAllAdminData();
    setUsers(users);
    setLoading(false);
  };

  const handleRoleChange = async (user, newRole) => {
    try {
      await upsertItem({ tableName: 'profiles', item: { ...user, role: newRole } });
      fetchUsers();
      toast.success(t('admin.userRoleUpdateSuccess'));
    } catch (error) {
      toast.error(t('admin.userRoleUpdateError'));
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
              <th>{t('admin.username')}</th>
              <th>{t('admin.email')}</th>
              <th>{t('admin.role')}</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Select value={user.role} onChange={(e) => handleRoleChange(user, e.target.value)}>
                    <option value="visitor">{t('admin.visitor')}</option>
                    <option value="admin">{t('admin.admin')}</option>
                  </Select>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ManagementContainer>
  );
};

export default UserManagement;
