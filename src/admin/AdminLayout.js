
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, CssBaseline } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PlaceIcon from '@mui/icons-material/Place';
import MessageIcon from '@mui/icons-material/Message';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PeopleIcon from '@mui/icons-material/People';

const drawerWidth = 240;

const AdminLayout = () => {
  const { t } = useTranslation('admin');
  const location = useLocation();

  const navItems = [
    { text: t('nav.dashboard'), icon: <DashboardIcon />, link: '/admin' },
    { text: t('nav.cities'), icon: <LocationCityIcon />, link: '/admin/cities' },
    { text: t('nav.places'), icon: <PlaceIcon />, link: '/admin/places' },
    { text: t('nav.users'), icon: <PeopleIcon />, link: '/admin/users' },
    { text: t('nav.messages'), icon: <MessageIcon />, link: '/admin/messages' },
    { text: t('nav.feedback'), icon: <FeedbackIcon />, link: '/admin/feedback' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#f5f5f5' },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" component={Link} to="/admin" sx={{ textDecoration: 'none', color: 'inherit' }}>
            {t('title')}
          </Typography>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                selected={location.pathname === item.link}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: `calc(100% - ${drawerWidth}px)` }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
