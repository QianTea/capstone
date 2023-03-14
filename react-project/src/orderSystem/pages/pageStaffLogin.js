import * as React from 'react';
// login
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//login logo
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
// mui
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      customColor: {
        main: '#90d590', 
      },
    },
  });

export default function StaffLogin() {
  const navigate = useNavigate();
  const callLoginApi = (name, password) => {
    var data = JSON.stringify({
      "name": name,
      "password": password
    });

    axios({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5500/auth/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    })
      .then(function (response) {
        let data = response.data;
        if (data.status == 200) {
          localStorage.setItem('token', data.result);
          localStorage.setItem('isLoggedIn', true);
          navigate('/order');
        } else {
          alert(data.message);
        }
      })
      .catch(function (error) {
        alert(error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    callLoginApi(data.get('name'), data.get('password'));
    console.log({
      name: data.get('name'),
      password: data.get('password'),
    });
  };
  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#ebc247' }}>
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Staff Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="customColor"
              
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}