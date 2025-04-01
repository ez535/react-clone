import SdelanoValfe from "../pages/sdelano-v-alfe/sdelano-v-alfe";
import SvoyDizain from "../pages/svoy-dizain/svoy-dizain";
import Catalog1Img from '../../assets/img/catalog1.jpg';
import Catalog2Img from '../../assets/img/catalog2.jpg';

export interface MainCatalogItems {
    id: string;
    link: React.FC;
    label?: string;
    addInfo?: string;
    img?: string; 
}

export const mainCatalogLinksList: MainCatalogItems[] = [
    { id: 'sdelano-v-alfe', link: SdelanoValfe, label: 'Сделано в Альфе', addInfo: '© ООО «Альфа Фьюче Пипл», 2025', img: Catalog1Img},
    { id: 'svoy-dizain', link: SvoyDizain, label: 'Свой дизайн', img: Catalog2Img},
];