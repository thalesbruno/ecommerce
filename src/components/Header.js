import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';

const LeftSide = () => (
  <Box sx={{ height: '100%' }}>
    <Typography
      variant="h3"
      sx={{
        color: 'text.secondary',
        bgcolor: 'primary.main',
        // In order for a percentage value to work for height,
        // the parent's height must be determined
        height: '100%',
        paddingLeft: '15px',
        paddingRight: '15px',
        '& a': {
          textDecoration: 'none',
          color: 'inherit',
        },
      }}
    >
      <Link to="/">Home</Link>
    </Typography>
  </Box>
);

const RightSide = ({ dark, setDark }) => (
  <Box
    sx={{
      display: 'flex',
    }}
  >
    <MenuList />
    <IconButton
      sx={{ color: 'primary.main' }}
      onClick={() => setDark(!dark)}
    >
      {dark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  </Box>
);

const MenuList = () => (
  <Box
    component="ul"
    sx={{
      listStyleType: 'none',
      display: 'flex',
    }}
  >
    <MenuListLink to="/about">About</MenuListLink>
    <MenuListLink to="/contact">Contact</MenuListLink>
  </Box>
);

const MenuListLink = ({ children, ...props }) => (
  <Typography
    component="li"
    variant="h4"
    marginRight="15px"
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

const Header = ({ dark, setDark }) => (
  <Box>
    <AppBar
      position="static"
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          bgcolor: 'background.default',
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'primary.main',
          height: '6vh',
        }}
      >
        <LeftSide />
        <RightSide dark={dark} setDark={setDark} />
      </Toolbar>
    </AppBar>
  </Box>
);

Header.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

RightSide.propTypes = {
  dark: PropTypes.bool.isRequired,
  setDark: PropTypes.func.isRequired,
};

MenuListLink.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
