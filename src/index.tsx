import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter';
import AppRoutes from './routes/Routers';
import './css/global.module.css';

const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('No root element');

const root = createRoot(rootElement);
root.render(
    <AppRouter>
        <AppRoutes/>
    </AppRouter>
);