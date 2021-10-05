import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CartIcon from './CartIcon';

const LeftSide = () => (
  <Box sx={{ height: '100%' }}>
    <Typography
      variant="h4"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        // color: 'text.secondary',
        bgcolor: 'primary.main',
        height: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
        '& a': {
          textDecoration: 'none',
          color: 'inherit',
        },
      }}
    >
      <Link to="/">
        e-Commerce
      </Link>
    </Typography>
  </Box>
);

const RightSide = () => (
  <Box
    sx={{
      display: 'flex',
      height: '100%',
    }}
  >
    <MenuList />
  </Box>
);

const MenuList = () => (
  <Box
    component="ul"
    sx={{
      listStyleType: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
    }}
  >
    <MenuListLink to="/cart">
      <CartIcon />
    </MenuListLink>
  </Box>
);

const MenuListLink = ({ children, ...props }) => (
  <Typography
    component="li"
    // variant="h4"
    color="text.primary"
    sx={{
      '& a': {
        textDecoration: 'none',
        color: 'inherit',
      },
      '& a:hover': {
        color: 'primary.main',
      },
    }}
  >
    <Link {...props}>
      {children}
    </Link>

  </Typography>
);

const Header = () => (
  <AppBar
    position="fixed"
  >
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        bgcolor: 'background.default',
        height: '6vh',
      }}
    >
      <LeftSide />
      <RightSide />
    </Toolbar>
  </AppBar>
);

MenuListLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
