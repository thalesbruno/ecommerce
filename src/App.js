import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { themeDark, themeLight } from './theme';
import HomePage from './pages/home';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [dark, setDark] = useState(true);

  return (
    <ThemeProvider theme={dark ? themeDark : themeLight}>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
