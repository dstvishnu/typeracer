import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import '../index.css';

import Layout from './Layout/Layout';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <div>
              <h2>Type Racer</h2>
            </div>
            <Layout/>
          </div>
      </Provider>
    );
  }
}

export default App;
