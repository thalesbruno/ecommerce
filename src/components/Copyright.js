import React from 'react';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body1" color="text.primary" align="center">
      {'Copyright © '}
      thalesbruno.dev
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
