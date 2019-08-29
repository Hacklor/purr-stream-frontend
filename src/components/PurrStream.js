import React, { Component } from 'react';
import Purr from './Purr';

class PurrStream extends Component {

  constructor(props) {
    super(props)

    this.state = {
      purrs: []
    }

    this.purrService = props.purrService
  }

  componentDidMount() {
    this.purrService.list(
      (json) => { this.setState({ purrs: json }) }
    )
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
      <div className="cards">
        { purrs.map((purr, key) =>
          <Purr key={key} purr={purr} />
        ) }
      </div>
    )
  }
}

export default PurrStream;
