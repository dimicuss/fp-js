import ReactDOM from 'react-dom';
import React from 'react';

import { Router } from '@/router';



const app = document.createElement('div');



document.body.appendChild(app);
ReactDOM.render(
    <Router />,
    app,
);