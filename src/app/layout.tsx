import React from 'react';

import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import { Metadata } from 'next';
import './home.css';
import MUIwrapper from '@/components/MUI-wrapper/MUIwrapper';

export const metadata: Metadata = {
  title: 'AlertaVerde',
  description:
    'Uma rede social interativa criada para a conscientização das ocorrências na natureza onde você pode criar eventos, denuncias, ver notícias publicadas pelo IBGE sobre a causa e principalmente ajudar o planeta terra.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <MUIwrapper>
          <Navbar />
          <div>{children}</div>
        </MUIwrapper>
      </body>
    </html>
  );
}
