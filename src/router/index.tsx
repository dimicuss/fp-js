import React from 'react';
import { map } from 'ramda';
import { createBrowserHistory  } from 'history';
import { Router as ReactRouter, Route } from 'react-router'

import { Sidebar } from '@/components/Sidebar'
import { RouteType } from '@/types';

import { routes } from './routes';
import { styles } from './styles';


const history = createBrowserHistory();


const renderRoutes = map<RouteType, React.ReactElement>((route) => (
    <Route key={route.path} {...route} />
));


export const Router = React.memo(() => {
    return (
        <div className={styles.router}>
                <ReactRouter history={history}>
                    <Sidebar routes={routes} />
                    <div className={styles.page}>
                        {renderRoutes(routes)}
                    </div>
                </ReactRouter>
        </div>
    );
});