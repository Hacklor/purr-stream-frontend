import React, { Component } from 'react';

class PurrStream extends Component {
  render() {
    const purrs = this.props.purrs

    if (!purrs || purrs.length <= 0) {
      return (
        <div className="alert alert-warning" role="alert">
          No purrs present
        </div>
      )
    }

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{purrs[0].author}</h3>
          <p className="card-text">{purrs[0].content}</p>
        </div>
      </div>
    )
  }
}

export default PurrStream;
