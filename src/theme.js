import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const themeDark = createTheme({
  palette: {
    primary: {
      main: '#13A10E',
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
      secondary: '#111',
    },
  },
  // typography: {
  //   fontFamily: [
  //     'Ubuntu Mono',
  //     'monospace',
  //   ].join(','),
  // },
});

export const themeLight = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#eee',
    },
    text: {
      primary: '#111',
      secondary: '#bdbdbd',
    },
  },
  // typography: {
  //   fontFamily: [
  //     'Ubuntu Mono',
  //     'monospace',
  //   ].join(','),
  // },
});
