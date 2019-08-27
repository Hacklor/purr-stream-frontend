import React, { Component } from 'react';
import Purr from './Purr'

class PurrStream extends Component {
    render() {
        return (
            <div className="cards">
                { this.props.purrs.map((item, key) =>
                    <Purr author={item.author} content={item.content} />
                )}
            </div>
        )
    }
}

export default PurrStream;