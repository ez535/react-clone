import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainCatalog } from './ui/Links/MainCatalog/MainCatalog';
import SdelanoValfe from './pages/sdelano-v-alfe/sdelano-v-alfe';
import SvoyDizain from './pages/svoy-dizain/svoy-dizain';
import Contact from './pages/contact/contact';
import NoPage from './pages/no-page/no-page';
import { Layout } from './components/Layout';
import './css/global.module.css';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<MainCatalog/>}/>
                <Route path='sdelano-v-alfe' element={<SdelanoValfe/>}/>
                <Route path='svoi-dizain' element={<SvoyDizain/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<NoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);