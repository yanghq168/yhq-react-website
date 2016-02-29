import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  Main,
  About,
  Home,
  ReactJS,
  Webpack,
  Babel,
  ES6,
  Redux
} from '../containers';

export default (
  <Route path="/" component={Main}>
    <Route path="about" component={About} />
    <Route path="react" component={ReactJS} />
    <Route path="webpack" component={Webpack} />
    <Route path="babel" component={Babel} />
    <Route path="es6" component={ES6} />
    <Route path="redux" component={Redux} />
    <IndexRoute component={Home} />
  </Route>
)
