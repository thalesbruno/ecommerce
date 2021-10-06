/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Rating from '@mui/material/Rating';
import { CartContext } from '../contexts/CartContext';

const Item = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);

  const handleClick = () => {
    const productList = cart.products;
    const idx = productList.findIndex((p) => p.id === product.id);
    if (idx !== -1) {
      productList[idx].count += 1;
      setCart({
        ...cart,
        products: [...productList],
      });
    } else {
      setCart({
        ...cart,
        products: [...cart.products, { ...product, count: 1 }],
      });
    }
  };

  return (
    <Card>
      <CardMedia
        sx={{ marginTop: '8px' }}
        component="img"
        image={require(`../assets/${product.image}`).default}
      />
      <CardContent>
        <Typography>
          {product.name}
        </Typography>
        <Typography variant="h6">
          R$
          {' '}
          {product.price.toFixed(2)}
        </Typography>
        <Rating size="small" readOnly value={(product.score / 400) * 5} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          startIcon={<AddShoppingCartIcon />}
          variant="contained"
          onClick={handleClick}
        >
          Adicionar ao carrinho
        </Button>
      </CardActions>
    </Card>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
    count: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default Item;
