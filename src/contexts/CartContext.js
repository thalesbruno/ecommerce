import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    products: [],
    shipping: 0.0,
    subtotal: 0.0,
    total: 0.0,
  });

  const priceReducer = (
    total, currentProduct,
  ) => total + (currentProduct.price * currentProduct.count);

  const shippingReducer = (
    total, currentProduct,
  ) => total + (currentProduct.count * 10.00);

  useEffect(() => {
    setCart({
      ...cart,
      subtotal: cart.products.length === 0 ? 0.0 : cart.products.reduce(priceReducer, 0),
      shipping: cart.products.reduce(shippingReducer, 0),
    });
  }, [cart.products]);

  useEffect(() => {
    setCart({
      ...cart,
      total: cart.subtotal > 250 ? cart.subtotal : cart.subtotal + cart.shipping,
    });
  }, [cart.subtotal]);

  // useEffect(() => console.log(cart));

  return (
    <CartContext.Provider value={[cart, setCart]}>
      { children }
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
