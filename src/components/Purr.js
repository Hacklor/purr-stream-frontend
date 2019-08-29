import React, { Component } from 'react';
import moment from 'moment';

class Purr extends Component {
  render() {
    const purr = this.props.purr

    return (
      <div className="card mb-3">
        <div className="card-header">
          <span role="img">😺</span>Purr
        </div>
        <div className="card-body">
          <blockquote className="blockquote">
            <p>{purr.content}</p>
            <footer className="blockquote-footer">
              Posted by <strong>{purr.author}</strong> at &nbsp;
              <cite data-testid="created_at" title="created_at">{moment(purr.created_at).format('DD-MM-YYYY hh:mm:ss')}</cite></footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default Purr;
