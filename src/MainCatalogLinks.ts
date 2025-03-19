import Catalog1Img from './assets/img/catalog1.jpg';
import Catalog2Img from './assets/img/catalog2.jpg';

export interface MainCatalogItems {
    id: string;
    link: string;
    label?: string;
    addInfo?: string;
    img?: string; 
}

export const MainCatalogLinksList: MainCatalogItems[] = [
    { id: 'madeAlfa', link: '#', label: 'Сделано в Альфе', addInfo: '© ООО «Альфа Фьюче Пипл», 2025', img: Catalog1Img},
    { id: 'SelfMade', link: '#', label: 'Свой дизайн', img: Catalog2Img},
];