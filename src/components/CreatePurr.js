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
      <div className="mb-5">
        <h2>Create a new purr</h2>
        <form onSubmit={this.handleSubmit} data-testid="form">
          <div className="form-group row">
            <label htmlFor="author" className="col-sm-2 col-form-label">Author:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" data-testid="author" name="author" value={this.state.author} onChange={this.handleFormChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="content" className="col-sm-2 col-form-label">Content:</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" data-testid="content" name="content" value={this.state.content} onChange={this.handleFormChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mb-2">Send Purr</button>
        </form>
      </div>
    )
  }
}

export default CreatePurr;
