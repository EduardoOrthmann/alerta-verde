import React from 'react';
import './globals.css';

export const metadata = {
  title: 'AlertaVerde',
  description:
    'Uma rede social interativa criada para a conscientização das ocorrências na natureza onde você pode criar eventos, denuncias, ver notícias publicadas pelo IBGE sobre a causa e principalmente ajudar o planeta terra.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
