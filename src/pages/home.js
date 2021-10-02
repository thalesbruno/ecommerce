import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';

const HomePage = () => (
  <Container maxWidth="md">
    <Typography variant="h2">
      React and Material-UI template
    </Typography>
  </Container>
);

export default pageWrapperHOC(HomePage, { title: 'Home', center: true });
