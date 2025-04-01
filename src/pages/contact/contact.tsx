import React, { FC } from 'react';
import { Title } from '../../components/Title/Title';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';
// import * as styles from './contact.module.css';

const Contact: FC = () => { 
  return (
    <>
      <Title title="Контакты"/>
      <ul style={{fontSize: '16px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <li>info@alfabankstore.ru</li>
        <li>
          г. Москва, пр-т Андропова, 18 корп. 3 (Доступна услуга самовывоза)
          <br/>
          г. Москва, пр-т Андропова, 18 корп. 6
        </li>
        <li>
          пн-чт:
          <br />
          10:00—19:00
          <br />
          пт:
          <br />
          10:00—17:30
        </li>
        <li>Принимаем к оплате карты Visa, Mastercard, МИР.</li>
      </ul>
      <SocialLinks />
    </>
  );
};

export default Contact;