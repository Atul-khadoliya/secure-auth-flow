import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Container, Box, Typography, Button } from '@mui/material';

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the cookies
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');

    console.log('User logged out. Cookies cleared.');

    // Navigate back to the login page
    navigate('/login');
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography component="h1" variant="h4">
          🎉 Welcome to Your Dashboard! 🎉
        </Typography>
        <Typography>
          You have successfully completed the authentication flow.
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default DashboardPage;