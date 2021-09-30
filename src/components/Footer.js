import React from 'react';
import Box from '@mui/material/Box';
import Copyright from './Copyright';

const Footer = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        color: 'inherit',
        textDecoration: 'none',
      },
      '& a:hover': {
        color: 'primary.main',
      },
    }}
  >
    <Copyright />
  </Box>
);

export default Footer;
