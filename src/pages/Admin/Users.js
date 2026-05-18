import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { updateUserRole } from '../../supabaseService';
import { Table, Th, Td, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { useAdminData } from '../../hooks/useAdminData';

const Users = () => {
  const { t } = useTranslation();
  const { data, loading, refreshData } = useAdminData();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (data) setUsers(data.users);
  }, [data]);

  const handleRoleChange = async (id, role) => {
    try {
      await updateUserRole({ id, role });
      toast.success(t('admin.userRoleUpdateSuccess'));
      refreshData();
    } catch (error) {
      toast.error(t('admin.userRoleUpdateError'));
    }
  };

  if (loading) return <div>{t('admin.loading')}</div>;

  return (
    <div>
      <h2>{t('admin.users')}</h2>
      <Table>
        <thead>
          <Tr>
            <Th>{t('admin.username')}</Th>
            <Th>{t('admin.email')}</Th>
            <Th>{t('admin.role')}</Th>
            <Th>{t('admin.actions')}</Th>
          </Tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.username}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                {user.role !== 'admin' ? (
                  <Button onClick={() => handleRoleChange(user.id, 'admin')}>{t('admin.makeAdmin')}</Button>
                ) : (
                  <Button onClick={() => handleRoleChange(user.id, 'visitor')}>{t('admin.makeVisitor')}</Button>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
