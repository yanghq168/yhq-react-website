'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';

// const appHistory = useRouterHistory( createHashHistory )({
//   queryKey: false
// });

let root = document.getElementById('app');

ReactDOM.render(
    <Router
      history={browserHistory}
      routes={routes}>
    </Router>, root
);
