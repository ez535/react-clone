import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Button } from 'antd';
import { Logo } from './ui/logo/index';
import burger from './assets/img/burger.png';
import { Header } from './ui/header/index';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Header 
            className='header'
            >
                <Logo className='logo'>a-store</Logo>
                <Button className='btn btn_menu' disabled={true}>
                    меню
                    <img src={burger} alt="burger menu" />
                </Button>
        </Header>
    </BrowserRouter>
);