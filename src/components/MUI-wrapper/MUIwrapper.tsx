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
    mode: 'light',
    primary: {
      main: '#04D361',
    },
    secondary: {
      main: '#dbf301',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
      defaultProps: {
        size: 'large',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorTransparent: {
          backdropFilter: 'blur(4px)',
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          sx: {
            top: '-2px',
          },
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
