import React, { useState } from 'react';
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
import { ProductsProvider } from './contexts/ExampleContext';

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
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={themeLight}>
      <HelmetProvider>
        <ProductsProvider>
          <CssBaseline />
          <Router>
            <AppWrapper>
              <Header />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/chart" component={CartPage} />
              </Switch>
              <Footer />
            </AppWrapper>
          </Router>
        </ProductsProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
