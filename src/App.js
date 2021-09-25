import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeDark, themeLight } from './theme';
import HomePage from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(true);

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <CssBaseline />
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
