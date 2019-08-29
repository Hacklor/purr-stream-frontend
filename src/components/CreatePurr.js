import React, { Component } from 'react';

class CreatePurr extends Component {

  constructor(props) {
    super(props)

    this.state = {
        author: '',
        content: ''
    }

    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange() {
    const name = target.name;
    const value = target.value;

    this.setState({[name]: value})
  }

  render() {
    return (
        <form>
            <label>
                Author:
                <input type="text" value={this.state.author} onChange={this.handleFormChange} />
            </label>
            <label>
                Content:
                <input type="text" value={this.state.content} onChange={this.handleFormChange} />
            </label>
        </form>
    )
  }
}

export default CreatePurr;