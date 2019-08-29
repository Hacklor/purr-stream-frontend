import React, { Component } from 'react';

class Purr extends Component {
  render() {
    const purr = this.props.purr

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{purr.author}</h3>
          <p className="card-text">{purr.content}</p>
        </div>
      </div>
    )
  }
}

export default Purr;
