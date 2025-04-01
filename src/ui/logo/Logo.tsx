import React from 'react';
import {FC, ReactNode} from "react";
import { Link } from 'react-router-dom';
import * as styles from "./logoAdd.module.css";
import cn from 'classnames';

type Props = {
    children: ReactNode;
    className?: string;
    link?: string;
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