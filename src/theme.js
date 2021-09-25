import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const themeDark = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#000',
    },
    text: {
      primary: '#ccc',
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu Mono',
      'monospace',
    ].join(','),
  },
});

export const themeLight = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu Mono',
      'monospace',
    ].join(','),
  },
});
