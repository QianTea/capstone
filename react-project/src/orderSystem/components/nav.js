import * as React from 'react';
import { Link } from 'react-router-dom';
// mui
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import SetMealIcon from '@mui/icons-material/SetMeal';
//style
const styles= {
 nav:{
  backgroundColor: '#4d4d4d',
 },
};
//data
const pages = [
  { value: 'order/login', label: 'Login' },
  { value: 'order/home', label: 'Home' },
  { value: 'order/currentorder', label: 'Current ' },
  { value: 'order/orderhistory', label: 'History' },
  
  { value: '', label: 'Web' },
  { value: '../admin', label: 'Admin' },
  { value: '*', label: '404' }
];

function OrderNav(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const clickPage = (page = 'default') => {
    // alert(page);
  };

  return (
    <AppBar position="static" style={styles.nav}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SetMealIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RFH Order System
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {props.pages && props.pages.map((page) => (
                <MenuItem key={page.value} onClick={clickPage}>
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <SetMealIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RFH Management Panel
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            { props.pages && props.pages.map((page)=> (

              <Link to={`/${page.value}`}>
                <Button
                  key={page}
                  // onClick={() => clickPage(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>

            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default OrderNav;
