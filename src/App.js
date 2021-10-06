import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { themeLight } from './theme';
import HomePage from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import CartPage from './pages/cart';
import { ProductsProvider } from './contexts/ProductsContext';
import { CartProvider } from './contexts/CartContext';

const AppWrapper = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh',
    }}
  >
    {children}
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <HelmetProvider>
        <CartProvider>
          <ProductsProvider>
            <CssBaseline />
            <Router>
              <AppWrapper>
                <Header />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/cart" component={CartPage} />
                </Switch>
                <Footer />
              </AppWrapper>
            </Router>
          </ProductsProvider>
        </CartProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
