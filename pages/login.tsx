import React from 'react';
import type { NextPage } from 'next'
import Avatar from '@mui/material/Avatar';
import UalaButton from '../components/UalaButton/UalaButton';
import UalaTextField from '../components/UalaTextField/UalaTextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const Login : NextPage = () => {
  const handleSubmit = (event : any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <UalaTextField
              required={true}
              label="Email Address"
              name="email"
              // autoComplete="email"
              // autoFocus
            />
            <UalaTextField
              required
              label="Password"
              name="password"
              type="password"
              //autoComplete="current-password"
            />
            <UalaButton
              type="submit"
              title="Login"
              color="primary"
              disabled={false}
              // sx={{ mt: 3, mb: 2 }}
            />
          </Box>
        </Box>
      </Container>
  );
};

export default Login;
