import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    shipping: 0.0,
    products: [],
    subtotal: 0.0,
    total: 0.0,
  });
  return (
    <CartContext.Provider values={[cart, setCart]}>
      { children }
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
