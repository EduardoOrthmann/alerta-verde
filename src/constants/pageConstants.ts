interface PagesInterface {
  name: string;
  href: string;
}

const PAGES: PagesInterface[] = [
  { name: 'Eventos', href: '/eventos' },
  { name: 'Denúncias', href: '/denuncias' },
  { name: 'Notícias', href: '/noticias' },
];

export default PAGES;
