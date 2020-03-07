import React from 'react';
import { map } from 'ramda';
import { Link } from 'react-router-dom';

import { RouteType } from '@/types';

import { styles } from './styles';
import { SidebarPropsType } from './types';


const renderLinks = map<RouteType, React.ReactElement>(({ title, path }) => {
    return <Link to={path} style={styles.sidebarItem} key={path}>{title}</Link>
});



export const Sidebar: React.FC<SidebarPropsType> = React.memo(({ routes }) => {
    return (
        <div style={styles.sidebar}>
            {renderLinks(routes)}
        </div>
    );
});


