import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ImageUpload from '../components/ImageUpload';

const CityManagement = () => {
  const { t } = useTranslation();
  const [cities, setCities] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingCity, setEditingCity] = useState(null);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    const { data, error } = await supabase.from('cities').select('*').order('name');
    if (error) console.error('Error fetching cities:', error);
    else setCities(data);
  };

  const handleOpen = (city = null) => {
    setEditingCity(city);
    setName(city ? city.name : '');
    setImageUrl(city ? city.image_url : '');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingCity(null);
    setName('');
    setImageUrl('');
  };

  const handleSubmit = async () => {
    const cityData = { name, image_url: imageUrl };

    if (editingCity) {
      const { error } = await supabase.from('cities').update(cityData).eq('id', editingCity.id);
      if (error) console.error('Error updating city:', error);
    } else {
      const { error } = await supabase.from('cities').insert([cityData]);
      if (error) console.error('Error creating city:', error);
    }
    fetchCities();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      const { error } = await supabase.from('cities').delete().eq('id', id);
      if (error) console.error('Error deleting city:', error);
      else fetchCities();
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{t('cityManagement.title')}</Typography>
        <Button variant="contained" onClick={() => handleOpen()}>
          {t('cityManagement.add')}
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('cityManagement.table.image')}</TableCell>
              <TableCell>{t('cityManagement.table.name')}</TableCell>
              <TableCell align="right">{t('cityManagement.table.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cities.map((city) => (
              <TableRow key={city.id}>
                <TableCell>
                  <img src={city.image_url} alt={city.name} style={{ width: '100px', height: 'auto', borderRadius: '4px' }} />
                </TableCell>
                <TableCell>{city.name}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(city)}><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(city.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingCity ? t('cityManagement.editTitle') : t('cityManagement.addTitle')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t('cityManagement.form.name')}
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ImageUpload onUpload={setImageUrl} bucketName="city-images" currentImage={imageUrl} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button onClick={handleSubmit}>{editingCity ? t('save') : t('add')}</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default CityManagement;
