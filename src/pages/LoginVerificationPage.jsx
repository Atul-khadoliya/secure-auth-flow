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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

// --- OTP Simulation ---
const CORRECT_OTP = '987654';

const LoginVerificationPage = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { otp: '' },
  });
  const navigate = useNavigate();
  const [verificationError, setVerificationError] = useState('');
  const [verificationMethod, setVerificationMethod] = useState('email');

  const handleMethodChange = (event) => {
    setVerificationMethod(event.target.value);
    console.log(`Verification method chosen: ${event.target.value}. In a real app, an OTP would be sent now.`);
  };

  const onSubmit = (data) => {
    setVerificationError('');
    if (data.otp === CORRECT_OTP) {
      console.log('2FA Verification Successful! Granting access.');
      navigate('/dashboard'); // Navigate to the protected dashboard
    } else {
      setVerificationError('Invalid OTP. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
        <Typography component="h1" variant="h5">
          Two-Factor Authentication
        </Typography>
        <Typography component="p" sx={{ mt: 1, textAlign: 'center' }}>
          Please choose a method to verify your identity.
          <br />
          (Hint: The OTP is <b>987654</b> for either method)
        </Typography>

        <FormControl component="fieldset" sx={{ mt: 3 }}>
          <FormLabel component="legend">Verification Method</FormLabel>
          <RadioGroup row value={verificationMethod} onChange={handleMethodChange}>
            <FormControlLabel value="email" control={<Radio />} label="Email OTP" />
            <FormControlLabel value="mobile" control={<Radio />} label="Mobile OTP" />
          </RadioGroup>
        </FormControl>

        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }} >
          <Stack spacing={2}>
            {verificationError && <Alert severity="error">{verificationError}</Alert>}
            <Controller
              name="otp"
              control={control}
              rules={{ required: 'OTP is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="One-Time Password"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  error={!!errors.otp}
                  helperText={errors.otp?.message}
                />
              )}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Verify
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginVerificationPage;