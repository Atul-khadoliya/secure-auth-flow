import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
} from '@mui/material';

// --- OTP Simulation ---
// In a real app, these would not be hardcoded.
const CORRECT_MOBILE_OTP = '123456';
const CORRECT_EMAIL_OTP = '654321';
// --------------------

const SignupVerificationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobileOtp: '',
      emailOtp: '',
    },
  });

  const navigate = useNavigate();
  const [verificationError, setVerificationError] = useState('');

  const onSubmit = (data) => {
    setVerificationError(''); // Clear previous errors

    if (
      data.mobileOtp === CORRECT_MOBILE_OTP &&
      data.emailOtp === CORRECT_EMAIL_OTP
    ) {
      // On success
      console.log('Verification Successful! User is registered.');
      alert('Signup successful! Please log in.'); // Simple feedback for the user
      navigate('/login');
    } else {
      // On failure
      console.error('Invalid OTPs provided.');
      setVerificationError('Invalid OTP for mobile or email. Please try again.');
    }
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
          Verify Your Account
        </Typography>
        <Typography component="p" sx={{ mt: 1, textAlign: 'center' }}>
          Enter the OTP sent to your mobile and email.
          <br />
          (Hint: Mobile is <b>123456</b>, Email is <b>654321</b>)
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 3 }}
        >
          <Stack spacing={2}>
            {verificationError && (
              <Alert severity="error">{verificationError}</Alert>
            )}

            <Controller
              name="mobileOtp"
              control={control}
              rules={{
                required: 'Mobile OTP is required',
                minLength: { value: 6, message: 'OTP must be 6 digits' },
                maxLength: { value: 6, message: 'OTP must be 6 digits' },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Mobile OTP"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  error={!!errors.mobileOtp}
                  helperText={errors.mobileOtp?.message}
                />
              )}
            />

            <Controller
              name="emailOtp"
              control={control}
              rules={{
                required: 'Email OTP is required',
                minLength: { value: 6, message: 'OTP must be 6 digits' },
                maxLength: { value: 6, message: 'OTP must be 6 digits' },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email OTP"
                  variant="outlined"
                  fullWidth
                  error={!!errors.emailOtp}
                  helperText={errors.emailOtp?.message}
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify & Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupVerificationPage;