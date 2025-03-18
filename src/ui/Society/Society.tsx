import React, {FC} from 'react';
import cn from 'classnames';
import * as styles from './Society.module.css';

type Props = {
    className?: string | undefined;
};

export const Society: FC<Props> = () => {
    return (
        <>
            <div className={cn(styles.society)}>
                <a href="https://store.alfabank.ru/policy" className={cn(styles.society__link)}>
                    Политика конфиденциальности <br></br>и обработки персональных данных  
                </a>
            </div>
        </>
    )
}