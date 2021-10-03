import React from 'react';
import { useTheme } from '@emotion/react';
import { ReactComponent as CartSVG } from '../assets/cart-icon.svg';

const CartIcon = () => {
  const theme = useTheme();
  return (
    <CartSVG
      style={{
        width: '50px',
        height: '100%',
        fill: theme.palette.primary.main,
        stroke: theme.palette.primary.main,
      }}
    />
  );
};

export default CartIcon;
