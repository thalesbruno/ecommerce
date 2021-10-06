import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider } from '../contexts/CartContext';
import { ProductsProvider } from '../contexts/ProductsContext';
import { HomePage } from './home';

test('if a user adds a product to cart, the success message has to appear', () => {
  render(
    <CartProvider>
      <ProductsProvider>
        <HomePage />
      </ProductsProvider>
    </CartProvider>,
  );
  userEvent.click(screen.getAllByText('Adicionar ao carrinho')[0]);
  expect(screen.getByText('Produto adicionado ao carrinho'));
});
