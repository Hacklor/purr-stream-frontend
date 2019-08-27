import React, { Component } from 'react';

class PurrStream extends Component {
    render() {
        return (
            <div className="cards">
                <div className="card">
                    <div className="card-body">
                        <h3 class="card-title">Author1</h3>
                        <p class="card-text">Content of the purr 1</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 class="card-title">Author1</h3>
                        <p class="card-text">Content of the purr 2</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h3 class="card-title">Author 3</h3>
                        <p class="card-text">Content of the purr 3</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PurrStream;