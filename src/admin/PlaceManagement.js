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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import ImageUpload from '../components/ImageUpload';

const PlaceManagement = () => {
  const { t } = useTranslation();
  const [places, setPlaces] = useState([]);
  const [cities, setCities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [formState, setFormState] = useState({ name: '', description: '', image_url: '', city_id: '', category_id: '' });

  useEffect(() => {
    fetchPlaces();
    fetchCities();
    fetchCategories();
  }, []);

  const fetchPlaces = async () => {
    const { data, error } = await supabase.from('places').select('*, cities(name), categories(name)').order('name');
    if (error) console.error('Error fetching places:', error);
    else setPlaces(data);
  };

  const fetchCities = async () => {
    const { data, error } = await supabase.from('cities').select('*');
    if (error) console.error('Error fetching cities:', error);
    else setCities(data);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) console.error('Error fetching categories:', error);
    else setCategories(data);
  };

  const handleOpen = (place = null) => {
    setEditingPlace(place);
    setFormState(
      place
        ? { name: place.name, description: place.description, image_url: place.image_url, city_id: place.city_id, category_id: place.category_id }
        : { name: '', description: '', image_url: '', city_id: '', category_id: '' }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingPlace(null);
    setFormState({ name: '', description: '', image_url: '', city_id: '', category_id: '' });
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (url) => {
    setFormState({ ...formState, image_url: url });
  };

  const handleSubmit = async () => {
    const { name, description, image_url, city_id, category_id } = formState;
    const placeData = { name, description, image_url, city_id, category_id };

    if (editingPlace) {
      const { error } = await supabase.from('places').update(placeData).eq('id', editingPlace.id);
      if (error) console.error('Error updating place:', error);
    } else {
      const { error } = await supabase.from('places').insert([placeData]);
      if (error) console.error('Error creating place:', error);
    }
    fetchPlaces();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      const { error } = await supabase.from('places').delete().eq('id', id);
      if (error) console.error('Error deleting place:', error);
      else fetchPlaces();
    }
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{t('placeManagement.title')}</Typography>
        <Button variant="contained" onClick={() => handleOpen()}>
          {t('placeManagement.add')}
        </Button>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('placeManagement.table.image')}</TableCell>
              <TableCell>{t('placeManagement.table.name')}</TableCell>
              <TableCell>{t('placeManagement.table.city')}</TableCell>
              <TableCell>{t('placeManagement.table.category')}</TableCell>
              <TableCell align="right">{t('placeManagement.table.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {places.map((place) => (
              <TableRow key={place.id}>
                <TableCell>
                  <img src={place.image_url} alt={place.name} style={{ width: '100px', height: 'auto', borderRadius: '4px' }} />
                </TableCell>
                <TableCell>{place.name}</TableCell>
                <TableCell>{place.cities.name}</TableCell>
                <TableCell>{place.categories.name}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleOpen(place)}><Edit /></IconButton>
                  <IconButton onClick={() => handleDelete(place.id)}><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingPlace ? t('placeManagement.editTitle') : t('placeManagement.addTitle')}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" name="name" label={t('placeManagement.form.name')} type="text" fullWidth value={formState.name} onChange={handleChange} />
          <TextField margin="dense" name="description" label={t('placeManagement.form.description')} type="text" fullWidth multiline rows={4} value={formState.description} onChange={handleChange} />
          <FormControl fullWidth margin="dense">
            <InputLabel>{t('placeManagement.form.city')}</InputLabel>
            <Select name="city_id" value={formState.city_id} label={t('placeManagement.form.city')} onChange={handleChange}>
              {cities.map((city) => (<MenuItem key={city.id} value={city.id}>{city.name}</MenuItem>))}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>{t('placeManagement.form.category')}</InputLabel>
            <Select name="category_id" value={formState.category_id} label={t('placeManagement.form.category')} onChange={handleChange}>
              {categories.map((category) => (<MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>))}
            </Select>
          </FormControl>
          <ImageUpload onUpload={handleImageUpload} bucketName="place-images" currentImage={formState.image_url} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('cancel')}</Button>
          <Button onClick={handleSubmit}>{editingPlace ? t('save') : t('add')}</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default PlaceManagement;
