import * as React from 'react';
import { useRef ,useState} from 'react';
// login
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//mui
import Avatar from '@mui/material/Avatar';
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
// alert
import { Alert, AlertTitle } from '@mui/material';

const theme = createTheme();

export default function Login() {
      // alert
      const [showAlert, setShowAlert] = useState(false);
      const [alertSeverity, setAlertSeverity] = useState('success');
      const [alertMessage, setAlertMessage] = useState('');
  
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
        console.log('login return');
        if (data.status == 200) {
          localStorage.setItem('token', data.data.token);
          localStorage.setItem('isLoggedIn', true);
          console.log('go to admin');
          navigate('/admin/home');
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
    callLoginApi(data.get('email'), data.get('password'));
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const emailRef = useRef(null);

  const forgotPswd = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    let data = {
      "username": email
    };

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5500/auth/forgot-password',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setShowAlert(true);
        setAlertSeverity('success');
        setAlertMessage('New password has been sent to your email.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: '#ffc107' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* // alert */}
          {showAlert &&
            <Alert severity={alertSeverity} onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
              <AlertTitle>{alertSeverity === 'success' ? 'Success' : 'Error'}</AlertTitle>
              {alertMessage}
            </Alert>
          }
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              inputRef={emailRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
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
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" onClick={forgotPswd} variant="body2">
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