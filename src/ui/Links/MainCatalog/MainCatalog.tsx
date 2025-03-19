import React, {FC} from 'react';
import cn from 'classnames';
import {MainCatalogLinksList} from '../../../MainCatalogLinks';
import { NavLink } from 'react-router-dom';

import * as styles from './MainCatalog.module.css';

type Props = {
    className?: string | undefined;
};

export const MainCatalog: FC<Props> = () => {
    const mainCatalogLinksItems = MainCatalogLinksList.map((mainCatalogItem, index) => (
        <li 
            key={String(index)}
            className={cn(styles.mainCatalogItem)}
        >
            <NavLink
                to={mainCatalogItem.link || '/'}
                className={cn(styles.mainCatalogLink)}
            >
                {mainCatalogItem.img && <img src={mainCatalogItem.img} alt={mainCatalogItem.label || 'Изображение'} />}
                <span className={cn(styles.nameCatalog)}>
                    {mainCatalogItem.label}
                </span>
                <p className={cn(styles.addInfo)}>
                    {mainCatalogItem.addInfo}
                </p>
            </NavLink>
        </li>
    ));

    return (
        <>
            <ul className={cn(styles.mainCatalogLinks)} >
                {mainCatalogLinksItems}
            </ul>
        </>
    )
}