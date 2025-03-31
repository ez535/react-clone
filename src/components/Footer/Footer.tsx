import React, {FC} from 'react';
import cn from 'classnames';
import * as styles from './Footer.module.css';

export const Footer: FC = () => {
    return (
        <footer
            className={cn(styles.footer)}
        >
            <span>© ООО «Альфа Фьюче Пипл», 2025</span>
        </footer>
    );
}