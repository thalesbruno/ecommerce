import React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body1" color="text.primary" align="center">
      {'Copyright © '}
      e-Commerce
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
