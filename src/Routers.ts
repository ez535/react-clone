export interface RouteItem {
  id: string;
  link: string;
  label?: string;
}

export const ROUTES: RouteItem[] = [
  { id: 'home', link: '/', label: 'Главная' },
  { id: 'about', link: '/about', label: 'О нас' },
  { id: 'services', link: '/services', label: 'Услуги' },
  { id: 'contact', link: '/contact', label: 'Контакты' },
];