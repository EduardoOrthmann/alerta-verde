'use client';

import React from 'react';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
    fontSize: 16,
    button: {
      textTransform: 'capitalize',
    },
  },
  palette: {
    primary: {
      main: '#04D361',
    },
    secondary: {
      main: '#dbf301',
    },
    text: {
      primary: '#000',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#000',
          borderRadius: '10px',
          padding: '12px 16px',
        },
      },
    },
  },
});

export default function MUIwrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{children}</CssBaseline>
    </ThemeProvider>
  );
}
