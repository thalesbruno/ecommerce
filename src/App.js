import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { themeDark, themeLight } from './theme';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <HelmetProvider>
        <CssBaseline />
        <Router>
          <Header dark={dark} setDark={setDark} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
          <Footer />
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
