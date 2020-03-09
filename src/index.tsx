import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import { Router } from '@/router';



const app = document.createElement('div');



document.body.appendChild(app);
ReactDOM.render(
    <Router />,
    app,
);