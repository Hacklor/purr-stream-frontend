import React, { Component } from 'react';
import './App.css';

import PurrService from './service/PurrService';

import PurrStream from './components/PurrStream';
import CreatePurr from './components/CreatePurr';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      purrs: []
    }
    this.purrService = new PurrService()
  }

  componentDidMount() {
    fetch("http://localhost:8000/purrs")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState(() => {
          return { purrs: json };
        })
      })
  }

  render() {
    const purrs = this.state.purrs

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CreatePurr purrService={this.purrService}/>
          </div>
          <div className="col">
            <PurrStream purrs={purrs} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
