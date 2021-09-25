import React from 'react';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body1" color="text.primary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="/">
        thalesbruno.dev
      </MuiLink>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}
