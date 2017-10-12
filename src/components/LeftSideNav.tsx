import * as React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './style.css';

class LeftSideNav extends Component<{}, {}> {
    render() {
        return (
            <ul className="left-side-nav" style={{ listStyleType: 'none' }}>
                <li><Link className="link" to="/">Index</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/hello">Hello</Link></li>
                <li><Link className="link" to="/product">Product</Link></li>
            </ul>
        );
    }
}

export default LeftSideNav;
