import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';

interface AppRouterProps {
    children: React.ReactNode;
}

const AppRouter: FC<AppRouterProps> = ({children}) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    );
}

export default AppRouter;