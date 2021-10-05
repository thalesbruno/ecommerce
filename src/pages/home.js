import React, { useContext, useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import pageWrapperHOC from '../components/wrappers/pageWrapperHOC';
import { ProductsContext } from '../contexts/ProductsContext';
import Item from '../components/Item';

const HomePage = () => {
  const [products, setProducts] = useContext(ProductsContext);
  const [sortBy, setSortBy] = useState('');

  const handleChange = (event) => setSortBy(event.target.value);

  const compareName = (product, nextProduct) => {
    if (product.name.toLowerCase() < nextProduct.name.toLowerCase()) return -1;
    if (product.name.toLowerCase() > nextProduct.name.toLowerCase()) return 1;
    return 0;
  };
  const compareScore = (product, nextProduct) => {
    if (product.score > nextProduct.score) return -1;
    if (product.score < nextProduct.score) return 1;
    return 0;
  };
  const comparePrice = (product, nextProduct) => {
    if (product.price < nextProduct.price) return -1;
    if (product.price > nextProduct.price) return 1;
    return 0;
  };

  useEffect(() => {
    if (sortBy === 'az') setProducts([...products].sort(compareName));
    if (sortBy === 'lowestPrice') setProducts([...products].sort(comparePrice));
    if (sortBy === 'biggestPrice') setProducts([...products].sort(comparePrice).reverse());
    if (sortBy === 'score') setProducts([...products].sort(compareScore));
  }, [sortBy]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel id="label-sorting">Ordenar por</InputLabel>
          <Select
            autoWidth
            label="Ordenar por"
            value={sortBy}
            onChange={handleChange}
          >
            <MenuItem value="lowestPrice">Menor preço</MenuItem>
            <MenuItem value="biggestPrice">Maior preço</MenuItem>
            <MenuItem value="score">Popularidade</MenuItem>
            <MenuItem value="az">Ordem alfabética</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default pageWrapperHOC(HomePage, { title: 'Home' });
