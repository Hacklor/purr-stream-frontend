import React, { Component } from 'react';

class CreatePurr extends Component {

  constructor(props) {
    super(props)

    this.state = {
        author: ''
    }

    this.handleAuthorChange = this.handleAuthorChange.bind(this)
  }

  handleAuthorChange() {
    this.setState({author: event.target.value})
  }

  render() {
    return (
        <form>
            <label>
                Author:
                <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
            </label>
        </form>
    )
  }
}

export default CreatePurr;