'use client';

import React, { ReactNode, useMemo, useState } from 'react';

import { CssBaseline, IconButton, ThemeProvider, createTheme } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface MUIwrapperProps {
  children: ReactNode;
}

export default function MUIwrapper({ children }: MUIwrapperProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: 'Plus Jakarta Sans, Arial, sans-serif',
          fontSize: 16,
          button: {
            textTransform: 'capitalize',
          },
          allVariants: {
            wordSpacing: '2px',
          },
        },
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
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
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '10px',
              },
            },
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <IconButton
          style={{ position: 'fixed', top: '7rem', right: '3rem' }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {children}
      </CssBaseline>
    </ThemeProvider>
  );
}
