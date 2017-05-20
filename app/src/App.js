import React, { Component } from 'react';
import Shopify from './Shopify';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick(e) {
    e.preventDefault();

    if (Shopify.ready()) {
      Shopify.sdk.Modal.productPicker({}, function(success, data) {
        if (success) {
          data.products.forEach(function(product){
            console.log('product type selected =', product.product_type);
          });

          Shopify.sdk.flashNotice('Product selected successfully!');
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick.bind(this)}>Pick Products</button>
      </div>
    );
  }
}

export default App;
