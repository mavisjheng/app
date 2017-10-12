import * as React from 'react';
import { Component } from 'react';
import './style.css';

class Header extends Component<{}, {}> {
  render() {
    return (
      <div className="main header">
        <h2>Welcome to React / TypeScript / Redux</h2>
      </div>
    );
  }
}

export default Header;
