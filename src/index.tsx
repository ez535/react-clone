import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
// import { Button } from 'antd';
// import { BurgerMenuBtn } from './ui/button/BurgerMenuBtn/BurgerMenuBtn';
import { Logo } from './ui/logo/index';
import { Navmenu } from './ui/Navmenu/Navmenu';
// import burger from './assets/img/burger.png';
import './css/global.module.css';
import { Header } from './ui/header/Header';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Header 
            className=''
            >
            <Logo className='logo'>A-Store</Logo>
            <Navmenu className='navMenu'/>
        </Header>
    </BrowserRouter>
);