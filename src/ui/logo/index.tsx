import React from 'react';
import {FC, ReactNode} from "react";
import { Link } from 'react-router-dom';
import * as styles from "./logoAdd.module.css";
import cn from 'classnames';
// import styles from './index.module.css';

type Props = {
    children: ReactNode;
    className?: string | undefined;
    link?: string | undefined;
};

export const Logo: FC<Props> = ({children, className, link}) => {
    return (
        <Link
            to={link || '/'}
            className={cn(styles.logo, className)}
            >
                {children}
        </Link>
    );
}