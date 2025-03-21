import React from 'react';
import { Route, Routes } from "react-router-dom";
import SdelanoValfe from "../pages/sdelano-v-alfe/sdelano-v-alfe";
import SvoyDizain from "../pages/svoy-dizain/svoy-dizain";
import Contact from "../pages/contact/contact";
import NoPage from "../pages/no-page/no-page";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const AppRoutes: React.FC = () => {
  const navRouters: RouteConfig[] = [
    {path: '/sdelano-v-alfe', element: <SdelanoValfe/>},
    {path: '/svoy-dizain', element: <SvoyDizain/>},
    {path: '/contact', element: <Contact/>},
    {path: '/no-page', element: <NoPage/>},
  ]

  return (
    <Routes>
      {navRouters.map((route) => (
        <Route key={route.path} path={route.path} element={route.element}></Route>
      ))}
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
};

export default AppRoutes;


// import React from 'react';
// import { Route, Routes } from "react-router-dom";
// import MainPage from "../pages/main-page/main-page";
// import SdelanoValfe from "../pages/sdelano-v-alfe/sdelano-v-alfe";
// import SvoyDizain from "../pages/svoy-dizain/svoy-dizain";
// import Contact from "../pages/contact/contact";
// import NoPage from "../pages/no-page/no-page";

// interface RouteConfig {
//   path: string;
//   element: React.ReactNode;
// }

// const AppRoutes: React.FC = () => {
//   // { id: 'home', link: '/sdelano-v-alfe', label: 'Сделано в Альфе' },
//   // { id: 'about', link: '/svoy-dizain', label: 'Свой дизайн' },
//   // { id: 'contact', link: '/contact', label: 'Контакты' },

//   const navRouters: RouteConfig[] = [
//     {path: '/', element: <MainPage/>},
//     {path: '/sdelano-v-alfe', element: <SdelanoValfe/>},
//     {path: '/svoy-dizain', element: <SvoyDizain/>},
//     {path: '/contact', element: <Contact/>},
//     {path: '/no-page', element: <NoPage/>},
//   ]

//   return (
//     <Routes>
//       {navRouters.map((route) => (
//         <Route key={route.path} path={route.path} element={route.element}></Route>
//       ))}
//       <Route path="*" element={<NoPage />} />
//     </Routes>
//   )
// };

// export default AppRoutes;