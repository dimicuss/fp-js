import React from 'react';
import { styles } from './styles';


export const HeaderOne: React.FC = React.memo((props) => {
    return <h1 className={styles.main} {...props} />
});
