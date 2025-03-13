import React from 'react';
import {FC, ReactNode} from "react";
import cn from 'classnames';
import * as styles from './index.module.css';

type Props = {
    children: ReactNode;
    color?: "primary" | "secondary";
    disabled?: boolean;
};

export const Button: FC<Props> = ({children, color = 'primary', disabled = false}) => {
    return (
        <button
            className={cn({[styles.primary]: color === 'primary', 
            [styles.secondary]: color === 'secondary'})}
            disabled={disabled}
            >
                {children}
        </button>
    );
}
