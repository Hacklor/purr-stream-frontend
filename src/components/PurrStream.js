import React, { Component } from 'react';
import Purr from './Purr'

class PurrStream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            purrs: [
                { author: 'AuthorA', content: 'Content of the purr 1' },
                { author: 'AuthorB', content: 'Content of the purr 2' },
                { author: 'AuthorC', content: 'Content of the purr 3' },
            ]
        }
    }

    render() {
        return (
            <div className="cards">
                { this.state.purrs.map((item, key) =>
                    <Purr author={item.author} content={item.content} />
                )}
            </div>
        )
    }
}

export default PurrStream;