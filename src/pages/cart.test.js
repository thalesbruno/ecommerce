import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartPage } from './cart';
import { CartProvider } from '../contexts/CartContext';

test('on initial render, the cart is empty', () => {
  render(
    <CartProvider>
      <CartPage />
    </CartProvider>,
  );

  expect(screen.getByText('Seu carrinho está vazio'));
});
