import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router';
import { Greeting, About, Product } from '../components';
import Hello from '../containers/Hello';

class Page extends Component<{}, {}> {
    render() {
        return (
          <div className="page">
            <Route exact={true} path="/" component={Greeting}/>
            <Route path="/about" component={About}/>
            <Route path="/hello" component={Hello}/>
            <Route path="/product" component={Product}/>
          </div>
        );
    }
}

export default Page;
