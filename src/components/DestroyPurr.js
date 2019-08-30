import React, { Component } from 'react';
import moment from 'moment';

class DestroyPurr extends Component {

  constructor(props) {
    super(props)

    this.purrId = props.purr.id
    this.purrService = props.purrService

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  async handleOnClick(event) {
    event.preventDefault();

    try {
      await this.purrService.destroy(this.purrId)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return(
      <button type="button" className="btn btn-outline-danger" onClick={this.handleOnClick}>Delete</button>
    )
  }
}

export default DestroyPurr;
