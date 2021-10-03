import React from 'react';
import Grid from '@mui/material/Grid';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';

const HomePage = () => (
  <Grid container maxWidth="md" />
);

export default pageWrapperHOC(HomePage, { title: 'Home' });
