import React from 'react';
import cn from 'classnames';
import { Outlet, useLocation } from 'react-router';
import { Navmenu } from './Navmenu/Navmenu';
import { Header } from './Header/Header';
import { Logo } from '../ui/Logo/Logo';
import { Footer } from './Footer/Footer';
import * as styles from './Layout.module.css';

export const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return(
        <>
            <Header 
                className=''
                >
                <Logo className='logo'>A-Store</Logo>
                <Navmenu className='navMenu'/>
            </Header>
            <main className={cn(isHomePage ? '': styles.main)}>
                <Outlet />
            </main>
            {!isHomePage && <Footer />}
        </>
    )
}