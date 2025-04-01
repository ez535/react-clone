import React from 'react';
import { Route, Routes } from "react-router-dom";
import { MainCatalog } from '../ui/Links/MainCatalog/MainCatalog';
import SdelanoValfe from "../pages/sdelano-v-alfe/sdelano-v-alfe";
import SvoyDizain from "../pages/svoy-dizain/svoy-dizain";
import Contact from "../pages/contact/contact";
import NoPage from "../pages/no-page/no-page";
import { Layout } from '../components/Layout';

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC = () => {
  const navRouters: RouteConfig[] = [
    {path: '/', element: <MainCatalog/>},
    {path: '/sdelano-v-alfe', element: <SdelanoValfe/>},
    {path: '/svoy-dizain', element: <SvoyDizain/>},
    {path: '/contact', element: <Contact/>},
    {path: '/no-page', element: <NoPage/>},
  ]

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {navRouters.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}></Route>
        ))}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  )
};

export default AppRoutes;