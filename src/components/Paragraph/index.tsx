import React from 'react';
import { styles } from './styles';


export const Paragraph: React.FC = React.memo((props) => {
    return <p className={styles.main} {...props} />
});
