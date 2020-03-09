import React from 'react';
import { styles } from './styles';


export const HeaderThree: React.FC = React.memo((props) => {
    return <h3 className={styles.main} {...props} />
});
