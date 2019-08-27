import React, { Component } from 'react';
import './App.css';

import PurrStream from './components/PurrStream';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      purrs: [
          { author: 'AuthorA', content: 'Content of the purr 1' },
          { author: 'AuthorB', content: 'Content of the purr 2' },
          { author: 'AuthorC', content: 'Content of the purr 3' },
      ]
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <PurrStream purrs={this.state.purrs} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;