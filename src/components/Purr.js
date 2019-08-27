import React, { Component } from 'react';

class Purr extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{this.props.author}</h3>
                    <p className="card-text">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

export default Purr;