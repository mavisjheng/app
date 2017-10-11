import * as React from 'react';
import { Component } from 'react';
import Routes from '../routes';

class Page extends Component<{}, {}> {
    render() {
        return (
          <div className="page">
            {Routes}
          </div>
        );
    }
}

export default Page;
