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
  Button,
  Rating
} from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';

const FeedbackManagement = () => {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const { data, error } = await supabase.from('feedback').select('*, profiles(full_name)').order('created_at', { ascending: false });
    if (error) console.error('Error fetching feedback:', error);
    else setFeedback(data);
  };

  const handleView = (item) => {
    setSelectedFeedback(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFeedback(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      const { error } = await supabase.from('feedback').delete().eq('id', id);
      if (error) console.error('Error deleting feedback:', error);
      else fetchFeedback();
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{t('feedbackManagement.title')}</Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('feedbackManagement.table.user')}</TableCell>
              <TableCell>{t('feedbackManagement.table.subject')}</TableCell>
              <TableCell>{t('feedbackManagement.table.rating')}</TableCell>
              <TableCell>{t('feedbackManagement.table.date')}</TableCell>
              <TableCell align="right">{t('feedbackManagement.table.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feedback.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.profiles?.full_name || 'Anonymous'}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell><Rating value={item.rating} readOnly /></TableCell>
                <TableCell>{new Date(item.created_at).toLocaleString()}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleView(item)}><Visibility /></IconButton>
                  <IconButton onClick={() => handleDelete(item.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedFeedback && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{selectedFeedback.subject}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>From:</strong> {selectedFeedback.profiles?.full_name || 'Anonymous'}<br />
              <strong>Date:</strong> {new Date(selectedFeedback.created_at).toLocaleString()}
            </DialogContentText>
            <Rating value={selectedFeedback.rating} readOnly sx={{ mt: 2 }} />
            <DialogContentText sx={{ mt: 2 }}>
              {selectedFeedback.message}
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

export default FeedbackManagement;
