import * as React from 'react';
import { Component } from 'react';
import './Style.css';

class Product extends Component<{}, {}> {
    render() {
        return (
          <div className="app">
            <div className="product-header">
              買狗狗飼料 4kg 以下兩包或 7.5 kg 以上一包，送艾沛零食 100g 一包
            </div>
          </div>
        );
    }
}

export default Product;
