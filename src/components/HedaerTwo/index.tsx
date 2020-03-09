import React from 'react';
import { styles } from './styles';


export const HeaderTwo: React.FC = React.memo((props) => {
    return <h2 className={styles.main} {...props} />
});
