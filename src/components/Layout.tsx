import React from 'react';
import { Outlet } from 'react-router';
import { Navmenu } from './Navmenu/Navmenu';
import { Header } from './Header/Header';
import { Logo } from '../ui/logo';

export const Layout = () => {
    return(
        <>
            <Header 
                className=''
                >
                <Logo className='logo'>A-Store</Logo>
                <Navmenu className='navMenu'/>
            </Header>
            <Outlet />
        </>
    )
}