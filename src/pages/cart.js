import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';

const CartPage = () => (
  <Container maxWidth="md">
    <Typography variant="h3" align="center">Meu carrinho</Typography>
  </Container>
);

export default pageWrapperHOC(CartPage, { title: 'Carrinho' });
