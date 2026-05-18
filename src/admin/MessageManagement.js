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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const MessageManagement = () => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    const { data, error } = await supabase.from('contact_messages').select('*').order('created_at', { ascending: false });
    if (error) console.error('Error fetching messages:', error);
    else setMessages(data);
  };

  const handleView = (message) => {
    setSelectedMessage(message);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMessage(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      const { error } = await supabase.from('contact_messages').delete().eq('id', id);
      if (error) console.error('Error deleting message:', error);
      else fetchMessages();
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{t('messageManagement.title')}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('messageManagement.table.sender')}</TableCell>
              <TableCell>{t('messageManagement.table.subject')}</TableCell>
              <TableCell>{t('messageManagement.table.date')}</TableCell>
              <TableCell align="right">{t('messageManagement.table.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell>{message.name} ({message.email})</TableCell>
                <TableCell>{message.subject}</TableCell>
                <TableCell>{new Date(message.created_at).toLocaleString()}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleView(message)}><Visibility /></IconButton>
                  <IconButton onClick={() => handleDelete(message.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedMessage && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedMessage.subject}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>From:</strong> {selectedMessage.name} ({selectedMessage.email})<br />
              <strong>Date:</strong> {new Date(selectedMessage.created_at).toLocaleString()}
            </DialogContentText>
            <DialogContentText sx={{ mt: 2 }}>
              {selectedMessage.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>{t('close')}</Button>
          </DialogActions>
        </Dialog>
      )}
    </Paper>
  );
};

export default MessageManagement;
