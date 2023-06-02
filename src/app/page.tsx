'use client';

import { Button } from '@mui/material';

export default function Home() {
  return (
    <div className="home">
      <main>
        <h1>Olá! Seja bem vindo(a)!</h1>
        <p>
          Esta é uma rede social dedicada a amantes da natureza que querem fazer a diferença no mundo. Você é um deles?
        </p>
        <div className="main-button-group">
          <Button variant="contained">Começar agora</Button>
          <Button variant="outlined">Cadastrar</Button>
        </div>
      </main>
    </div>
  );
}
