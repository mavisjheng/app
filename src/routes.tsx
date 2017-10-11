import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { App, About, Product } from './components';
import Hello from './containers/Hello';

export default (
  <Switch>
    <Route exact={true} path="/" component={App}/>
    <Route exact={true} path="/about" component={About}/>
    <Route exact={true} path="/hello" component={Hello}/>
    <Route exact={true} path="/product" component={Product}/>
  </Switch>
);
