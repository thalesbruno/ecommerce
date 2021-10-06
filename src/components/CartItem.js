/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ product }) => {
  const [cart, setCart] = useContext(CartContext);

  const handleAdd = () => {
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

  const handleSub = () => {
    const productList = cart.products;
    const idx = productList.findIndex((p) => p.id === product.id);
    productList[idx].count -= 1;
    setCart({
      ...cart,
      products: [...productList],
    });
  };

  const handleRemove = () => {
    setCart({
      ...cart,
      products: cart.products.filter((p) => p.id !== product.id),
    });
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}>
      <Box sx={{ display: 'flex' }}>
        <img alt="product" width="80" src={require(`../assets/${product.image}`).default} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6">{product.name}</Typography>
          <IconButton onClick={handleRemove} sx={{ width: '30px' }} aria-label="delete" size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        border: '1px solid',
        height: '40px',
        padding: '5px',
      }}
      >
        <Button
          disabled={product.count < 2}
          sx={{
            minWidth: '30px',
          }}
          onClick={handleSub}
        >
          -
        </Button>
        <Typography sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 7px',
        }}
        >
          {product.count}

        </Typography>
        <Button
          sx={{
            minWidth: '30px',
          }}
          onClick={handleAdd}
        >
          +
        </Button>
      </Box>
      <Typography variant="h6">
        R$
        {' '}
        {(product.price * product.count).toFixed(2)}
      </Typography>
    </Box>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    score: PropTypes.number,
    image: PropTypes.string,
    count: PropTypes.number,
  }).isRequired,
};

export default CartItem;
