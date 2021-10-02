import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';

const AboutPage = () => (
  <Container maxWidth="md">
    <Typography variant="h3" align="center">About us</Typography>
    <Typography variant="p">
      this is the About page
    </Typography>
  </Container>
);

export default pageWrapperHOC(AboutPage, { title: 'About' });