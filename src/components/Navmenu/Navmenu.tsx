import React, {FC, useState} from 'react';
// import {AppRoutes} from '../../routes/Routers';
import { Button, Drawer, Menu } from 'antd';
import cn from 'classnames';
import {MenuOutlined} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import {Society} from '../Society/Society';
import {SocialLinks} from '../SocialLinks/SocialLinks';
import * as styles from'./Navmenu.module.css';

type Props = {
  className?: string | undefined;
};

// interface MenuItem {
//   key: string;
//   label: string;
//   path: string;
// }

export const Navmenu: FC<Props> = () => {
  const [openBurger, setOpenBurger] = useState(false);
  // const navigate = useNavigate();

  const showDrawer = () => {
    setOpenBurger(true);
  };

  const onClose = () => {
    setOpenBurger(false);
  };

  // const menuItems = ROUTES.map((route, index) => ({
  //   key: String(index),
  //   label: (
  //     <NavLink
  //       to={route.link || '/'}
  //       onClick={() => setOpenBurger(false)}
  //     >
  //       {route.label}
  //     </NavLink>
  //   ),
  // }));

  const menuItems = [
    {
      key: '/sdelano-v-alfe',
      label: (
        <NavLink
          to="/sdelano-v-alfe"
          onClick={onClose}
        >
          Сделано в Альфе
        </NavLink>
      ),
    },
    {
      key: '/svoy-dizain',
      label: (
        <NavLink
          to="/svoy-dizain"
          onClick={onClose}
        >
          Свой дизайн
        </NavLink>
      ),
    },
    {
      key: '/contact',
      label: (
        <NavLink
          to="/contact"
          onClick={onClose} 
        >
          Контакты
        </NavLink>
      ),
    },
  ]

  // const handleMenuClick: MenuProps['onClick'] = (e) => {
  //   navigate(e.key);
  //   onClose();
  // };

  return (
    <>
      <Button className={cn(styles.btn_menu)} type="primary" onClick={showDrawer}>
        <MenuOutlined />
        меню
      </Button>

      <Drawer 
        onClose={onClose} 
        open={openBurger}
        className={cn(styles.myDrawer)} 
      >
        <Menu
          mode="vertical"
          items={menuItems}
          className={cn(styles.navMenu)}
          // onClick={handleMenuClick}
        /> 
        <Society />
        <SocialLinks />
      </Drawer>
    </>
  );
}