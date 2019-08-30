import React, { Component } from 'react';
import './App.css';

import PurrService from './service/PurrService';

import PurrStream from './components/PurrStream';
import CreatePurr from './components/CreatePurr';

class App extends Component {
  constructor(props) {
    super(props)

    // This should be configurable in a settings file
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL
    this.purrService = new PurrService(backendUrl)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1><span role="img">😸</span> PurrStream</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CreatePurr purrService={this.purrService}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PurrStream purrService={this.purrService} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
