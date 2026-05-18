import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
}));

const AdminDashboard = () => {
  const { t } = useTranslation('admin');

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, fontWeight: 'bold' }}>
        {t('dashboard.title')}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard>
            <Typography variant="h5">123</Typography>
            <Typography>{t('dashboard.totalPlaces')}</Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard>
            <Typography variant="h5">45</Typography>
            <Typography>{t('dashboard.totalCities')}</Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard>
            <Typography variant="h5">89</Typography>
            <Typography>{t('dashboard.totalUsers')}</Typography>
          </StatCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard>
            <Typography variant="h5">5</Typography>
            <Typography>{t('dashboard.newMessages')}</Typography>
          </StatCard>
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>{t('dashboard.quickActions')}</Typography>
        {/* Quick actions can be added here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
