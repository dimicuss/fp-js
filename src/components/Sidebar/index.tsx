import React from 'react';
import { map } from 'ramda';
import { NavLink } from 'react-router-dom';

import { RouteType } from '@/types';

import { styles } from './styles';
import { SidebarPropsType } from './types';


const renderLinks = map<RouteType, React.ReactElement>(({ title, path }) => {
    return <NavLink to={path} className={styles.link} activeClassName={styles.activeLink} key={path}>{title}</NavLink>
});


export const Sidebar: React.FC<SidebarPropsType> = React.memo(({ routes }) => {
    return (
        <div className={styles.main}>
            {renderLinks(routes)}
        </div>
    );
});


