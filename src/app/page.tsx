'use client';

import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home flex-center">
      <main className="main-section container flex-center max-text">
        <h1>Olá! Seja bem vindo(a)!</h1>
        <p>
          Esta é uma rede social dedicada a amantes da natureza que querem fazer a diferença no mundo. Você é um deles?
        </p>
        <div className="main-button-group">
          <Button variant="contained">Começar agora</Button>
          <Button variant="outlined">Cadastrar</Button>
        </div>
      </main>

      <section className="first-section container flex-center">
        <div className="solid-color-background">
          <div className="text">
            <h2>Junte se a nós!</h2>
            <div>
              <p>
                faça a diferença para o nosso planeta Terra. Aqui, você encontrará um espaço dedicado a promover ações
                positivas em prol da natureza, compartilhar informações relevantes e engajar-se em atividades que
                ajudarão a preservar o meio ambiente.
              </p>
              <p>Registre-se agora e seja parte da mudança!</p>
            </div>
            <Button variant="outlined">Ver mais</Button>
          </div>
          <Image
            src="/index-background-first-section.jpg"
            alt="img"
            width={0}
            height={0}
            sizes="100vw"
            className="img"
          />
        </div>
      </section>

      <section className="second-section container flex-center">
        <Image
          src="/index-background-second-section.jpg"
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          className="img"
        />
        <div className="text">
          <p>
            Não deixe de acompanhar as últimas notícias publicadas pelo IBGE (Instituto Brasileiro de Geografia e
            Estatística) sobre as causas ambientais. Esteja sempre informado sobre as descobertas mais recentes, dados
            estatísticos e pesquisas científicas que ajudarão a aprofundar seu conhecimento e embasar suas ações em prol
            da preservação do meio ambiente.
          </p>
          <p>Pesquise as notícias públicadas pelo IBGE:</p>
          <div className="button-group">
            <TextField
              label="Pesquisar"
              variant="outlined"
              InputProps={{ sx: { height: 53 } }}
              InputLabelProps={{ sx: { top: '-4px' } }}
            />
            <Button variant="outlined">
              <SearchIcon />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
