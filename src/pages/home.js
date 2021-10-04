import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';
import { ProductsContext } from '../contexts/ExampleContext';
import Item from '../components/Item';

const HomePage = () => {
  const [products] = useContext(ProductsContext);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Item key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default pageWrapperHOC(HomePage, { title: 'Home' });
