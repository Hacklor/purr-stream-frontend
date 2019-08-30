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
    // Load for first time
    this.loadPurrs()

    // WARNING: DIRTY HACK
    // This is quite a dirty hack, because it does a lot of unnecessary reloads
    // But it is to prevent having to refactor everything to Redux right now
    // But still have auto-refresh of the list
    this.interval = setInterval( async () => await this.loadPurrs(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async loadPurrs() {
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
