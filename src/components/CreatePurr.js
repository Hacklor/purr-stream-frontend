import React, { Component } from 'react';

class CreatePurr extends Component {

  constructor(props) {
    super(props)

    this.state = {
        author: '',
        content: ''
    }

    this.handleSubmit = props.handleSubmit
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange() {
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value})
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} data-testid="form">
            <label>
                Author:
                <input type="text" value={this.state.author} onChange={this.handleFormChange} />
            </label>
            <label>
                Content:
                <input type="text" value={this.state.content} onChange={this.handleFormChange} />
            </label>
            <button type="submit">Send Purr</button>
        </form>
    )
  }
}

export default CreatePurr;