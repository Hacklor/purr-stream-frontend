import React, { Component } from 'react';

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
                    <div className="card">
                        <div className="card-body">
                            <h3 class="card-title">{item.author}</h3>
                            <p class="card-text">{item.content}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default PurrStream;