import React, { Component } from 'react';
import Purr from './Purr';
import DestroyPurr from './DestroyPurr';

class PurrStream extends Component {

  constructor(props) {
    super(props)

    this.state = {
      purrs: []
    }

    this.purrService = props.purrService
  }

  async componentDidMount() {
    try {
      const json = await this.purrService.list()
      this.setState({ purrs: json })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const purrs = this.state.purrs

    if (!purrs || purrs.length <= 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No purrs present
        </div>
      )
    }

    return (
      <div className="cards container">
        { purrs.map((purr, key) =>
          <div key={key} className="row">
            <div className="col">
              <Purr purr={purr} />
            </div>
            <div className="col-1">
              <DestroyPurr purr={purr} purrService={this.purrService} />
            </div>
          </div>
        ) }
      </div>
    )
  }
}

export default PurrStream;
