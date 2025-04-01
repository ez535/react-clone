import React from 'react';
import {FC, ReactNode} from "react";
import cn from 'classnames';
import * as styles from './Header.module.css';

type Props = {
    children: ReactNode;
    className: string | undefined;
};

export const Header: FC<Props> = ({children, className}) => {
    return (
        <header
            className={cn(styles.header, className)}
        >
            {children}
        </header>
    );
}