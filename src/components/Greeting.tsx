import * as React from 'react';
import { Component } from 'react';
import './style.css';

class Greeting extends Component<{}, {}> {
  render() {
    return (
      <div className="main greeting">
        <h2>HI</h2>
      </div>
    );
  }
}

export default Greeting;
