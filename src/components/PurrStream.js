import React, { Component } from 'react';

class PurrStream extends Component {
  render() {
    if (!this.props.purrs || this.props.purrs.length <= 0) {
      return(
        <div className="alert alert-warning" role="alert">
          No purrs present
        </div>
      )
    }
  }
}

export default PurrStream;
