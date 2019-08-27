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
      <div className="cards">
        { purrs.map((purr, key) =>
          <div key={key} className="card">
            <div className="card-body">
              <h3 className="card-title">{purr.author}</h3>
              <p className="card-text">{purr.content}</p>
            </div>
          </div>
        ) }
      </div>
    )
  }
}

export default PurrStream;
