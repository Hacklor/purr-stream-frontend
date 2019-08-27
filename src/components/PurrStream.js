import React, { Component } from 'react';

class PurrStream extends Component {
  render() {
    if (!this.props.purrs || this.props.purrs.length <= 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No purrs present
        </div>
      )
    }

    const purrs = this.props.purrs
    return (
      <div>
        <h3>{purrs[0].author}</h3>
        <p>{purrs[0].content}</p>
      </div>
    )
  }
}

export default PurrStream;
