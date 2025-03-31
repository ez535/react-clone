import React, { FC } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';
import cn from 'classnames';
import * as styles from './Title.module.css';

type Props = {
    title?: string;
};

export const Title: FC<Props> = ({title = ''}) => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      document.title = 'Главная'
    } else {
      document.title = title;
    }
  }, [location, title]);

  return (
    <>
        <Typography.Title 
          level={2} 
          className={cn(styles.title)}
        >
          {title}
      </Typography.Title>
    </>
  );
};