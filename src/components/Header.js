import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      sx={{
        bgcolor: 'transparent',
        borderBottom: '3px solid green',
      }}
      position="static"
    >
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          ~
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
