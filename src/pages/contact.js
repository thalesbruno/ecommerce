import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';

const ContactPage = () => (
  <Container maxWidth="md">
    <Typography variant="h3" align="center">Contact us</Typography>
    <Typography variant="p">
      Send a message to us
    </Typography>
  </Container>
);

export default pageWrapperHOC(ContactPage, { title: 'Contact' });
