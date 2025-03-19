import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Logo } from './ui/logo/index';
import { Navmenu } from './ui/Navmenu/Navmenu';
import { Header } from './ui/header/Header';
import { MainCatalog } from './ui/Links/MainCatalog/MainCatalog';
import './css/global.module.css';

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

        <MainCatalog />
    </BrowserRouter>
);