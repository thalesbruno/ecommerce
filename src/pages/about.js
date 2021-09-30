import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import withTitle from '../components/HOC/withTitle';

const AboutPage = () => (
  <Box>
    <Container maxWidth="md">
      <Typography variant="h3" align="center">about</Typography>
      <Typography variant="p">
        this is the About page
      </Typography>
    </Container>
  </Box>
);

export default withTitle(AboutPage, 'About');
