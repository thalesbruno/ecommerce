import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { themeDark, themeLight } from './theme';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/contact';

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
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <HelmetProvider>
        <CssBaseline />
        <Router>
          <AppWrapper>
            <Header dark={dark} setDark={setDark} />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
            <Footer />
          </AppWrapper>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
