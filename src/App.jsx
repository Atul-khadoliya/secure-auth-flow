import React from 'react';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Stack, Link } from '@mui/material';

// Import all our pages
import SignupPage from './pages/SignupPage';
import SignupVerificationPage from './pages/SignupVerificationPage';
import LoginPage from './pages/LoginPage';
import LoginVerificationPage from './pages/LoginVerificationPage'; // 1. Import
import DashboardPage from './pages/DashboardPage'; // 2. Import

const HomePage = () => (
  <Box textAlign="center" mt={10}>
    <Typography variant="h4" gutterBottom>Welcome to the Auth Flow Demo</Typography>
    <Stack direction="row" spacing={2} justifyContent="center">
      <Link component={RouterLink} to="/signup" variant="h6">
        Sign Up
      </Link>
      <Link component={RouterLink} to="/login" variant="h6">
        Login
      </Link>
    </Stack>
  </Box>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-verification" element={<SignupVerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login-verification" element={<LoginVerificationPage />} /> {/* 3. Add Route */}

        {/* Protected Route */}
        <Route path="/dashboard" element={<DashboardPage />} /> {/* 4. Add Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;