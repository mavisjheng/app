import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { App, About, Product } from './components';
import Hello from './containers/Hello';

export default (
  <Switch>
    <Route exact={true} path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/hello" component={Hello}/>
    <Route path="/product" component={Product}/>
  </Switch>
);
