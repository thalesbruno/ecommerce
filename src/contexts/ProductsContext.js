import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import productsJson from '../products.json';

const productList = productsJson.map((product) => ({ ...product, count: 0 }));

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productList);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
