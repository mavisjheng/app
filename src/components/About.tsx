import * as React from 'react';
import { Component } from 'react';
import './style.css';

class About extends Component<{}, {}> {
  render() {
    return (
      <div className="main about">
        This project is a TypeScript and React project created from create-react-app starter with react-scripts-ts
      </div>
    );
  }
}

export default About;
