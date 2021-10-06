import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const [cart] = useContext(CartContext);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: 1,
          padding: 5,
        }}
      >
        <Typography variant="h5">Meu carrinho</Typography>
        <Divider />
        {cart.products.length < 1
          ? <Typography variant="h6">Seu carrinho está vazio</Typography>
          : (
            <Grid container>
              <Grid
                item
                xs={12}
              >
                {cart.products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </Grid>
            </Grid>
          )}
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '80px',
            }}
            variant="h5"
          >
            Frete

          </Typography>
          <Typography variant="h5">{cart.subtotal > 250 ? 'GRÁTIS' : `R$ ${cart.shipping.toFixed(2)}`}</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Typography
            sx={{
              display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '20px',
            }}
            variant="h5"
          >
            Total
          </Typography>
          <Typography variant="h4">
            R$
            {' '}
            {cart.total.toFixed(2)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default pageWrapperHOC(CartPage, { title: 'Carrinho' });
