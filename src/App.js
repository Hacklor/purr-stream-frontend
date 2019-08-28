import React, { Component } from 'react';
import './App.css';
import PurrStream from './components/PurrStream';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <PurrStream />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
