import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Link,
  Grid,
} from '@mui/material';

const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      identifier: '', // This field will handle either email or mobile
      password: '',
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Login attempt with:', data);

    // --- Authentication Simulation & Cookie Handling ---
    // In a real app, you would send `data` to your backend.
    // The backend would verify credentials and return tokens if successful.
    // Here, we'll assume login is always successful and create dummy tokens.

    const dummyAccessToken =
      'jwt_access_token_string_example_12345_abcdef';
    const dummyRefreshToken =
      'jwt_refresh_token_string_example_67890_ghijkl';

    // Set cookies
    // Access Token: short-lived (e.g., 30 minutes)
    Cookies.set('accessToken', dummyAccessToken, {
      expires: 1 / 48, // 1/48 of a day = 30 minutes
      secure: true,    // Ensures cookie is sent over HTTPS
      sameSite: 'strict', // Mitigates CSRF attacks
    });

    // Refresh Token: long-lived (e.g., 7 days)
    Cookies.set('refreshToken', dummyRefreshToken, {
      expires: 7,
      secure: true,
      sameSite: 'strict',
    });

    console.log('Access and Refresh tokens stored in cookies.');
    
    // Navigate to the next step: login verification
    navigate('/login-verification');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Stack spacing={2}>
            <Controller
              name="identifier"
              control={control}
              rules={{ required: 'Email or Mobile Number is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email or Mobile Number"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  error={!!errors.identifier}
                  helperText={errors.identifier?.message}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;