import React, { Component } from 'react';

class CreatePurr extends Component {

  constructor(props) {
    super(props)

    this.state = {
        author: '',
        content: ''
    }

    this.purrService = props.purrService

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value})
  }

  handleSubmit(event) {
    event.preventDefault()

    const purr = this.state
    this.purrService.create(purr)
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} data-testid="form">
            <label>
                Author:
                <input type="text" name="author" value={this.state.author} onChange={this.handleFormChange} />
            </label>
            <label>
                Content:
                <input type="text" name="content" value={this.state.content} onChange={this.handleFormChange} />
            </label>
            <button type="submit">Send Purr</button>
        </form>
    )
  }
}

export default CreatePurr;
