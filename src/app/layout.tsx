'use client';

import React from 'react';

import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

export const metadata = {
  title: 'AlertaVerde',
  description:
    'Uma rede social interativa criada para a conscientização das ocorrências na natureza onde você pode criar eventos, denuncias, ver notícias publicadas pelo IBGE sobre a causa e principalmente ajudar o planeta terra.',
};

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
        },
      },
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Navbar />
            <div style={{ marginTop: '10rem' }}>{children}</div>
          </CssBaseline>
        </ThemeProvider>
      </body>
    </html>
  );
}
