import React, {FC, useState} from 'react';
import {ROUTES} from '../../Routers';
import { Button, Drawer, Menu } from 'antd';
import { RxHamburgerMenu } from "react-icons/rx";
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import {Society} from '../Society/Society';
import {SocialLinks} from '../SocialLinks/SocialLinks';
import * as styles from'./Navmenu.module.css';

type Props = {
  className?: string | undefined;
};

export const Navmenu: FC<Props> = () => {
  const [openBurger, setOpenBurger] = useState(false);

  const showDrawer = () => {
    setOpenBurger(true);
  };

  const onClose = () => {
    setOpenBurger(false);
  };

  const menuItems = ROUTES.map((route, index) => ({
    key: String(index),
    label: (
      <NavLink
        to={route.link || '/'}
        onClick={() => setOpenBurger(false)}
      >
        {route.label}
      </NavLink>
    ),
  }));

  const Burger = <RxHamburgerMenu size="30px" color="black"/>

  return (
    <>
      <Button className={cn(styles.btn_menu)} type="primary" onClick={showDrawer}>
        {Burger}
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
        />

        <Society />
        <SocialLinks />
      </Drawer>
    </>
  );
}