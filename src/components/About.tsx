import * as React from 'react';
import { Component } from 'react';
import './Style.css';

class About extends Component<{}, {}> {
    render() {
        return (
          <div className="app">
            <div className="about-header">
              This project is a TypeScript and React project created from create-react-app starter with react-scripts-ts
            </div>
          </div>
        );
    }
}

export default About;
