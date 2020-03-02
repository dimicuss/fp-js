import React from 'react';
import { Router as ReactRouter, Route } from 'react-router'
import { createBrowserHistory  } from 'history';

import { Currying } from '@/pages/Currying'


const history = createBrowserHistory();


export class Router extends React.PureComponent {
    render() {
        return (
            <div>
                <ReactRouter history={history}>
                    <Route path="/currying" component={Currying} />
                </ReactRouter>
            </div>
        );
    }
}