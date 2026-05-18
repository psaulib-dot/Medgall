import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

const UserManagement = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('profiles').select('id, full_name, email, role');
    if (error) console.error('Error fetching users:', error);
    else setUsers(data);
  };

  const handleRoleChange = async (userId, newRole) => {
    const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    if (error) console.error('Error updating user role:', error);
    else fetchUsers();
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        // It is not possible to delete a user directly from a secure frontend.
        // The user should be deleted from the Supabase dashboard.
        alert("Please delete users from the Supabase dashboard for security reasons.");
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{t('userManagement.title')}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('userManagement.table.name')}</TableCell>
              <TableCell>{t('userManagement.table.email')}</TableCell>
              <TableCell>{t('userManagement.table.role')}</TableCell>
              <TableCell align="right">{t('userManagement.table.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.full_name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <FormControl size="small">
                    <Select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="visitor">Visitor</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDelete(user.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default UserManagement;
