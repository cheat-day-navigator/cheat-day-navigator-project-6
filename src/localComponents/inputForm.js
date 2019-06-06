import React, { Component } from 'react'
import axios from 'axios'
import APIData from './apiData'

class InputForm extends Component {

  constructor() {
    super();
    this.state = {
      url: 'https://trackapi.nutritionix.com/v2/search/instant',
      appKey: '',
      appId: '',
      data: {},
      userInput: ''
    }
  }

  componentDidMount() {
    const appKeyGrab = APIData.appKey
    const appIdGrab = APIData.appId
    this.setState({
      appKey: appKeyGrab,
      appId: appIdGrab
    })
  }
    
  handleKeyPress = (e) => {
    if (e.which === 13) {
      this.handleClick(e)
    }
  }

  // Binding the user's input to create controlled information
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
  }

  // Create an event listener for user input
  handleClick = (event) => {
    event.preventDefault();
    axios({
      url: this.state.url,
      method: `GET`,
      dataResponse: `json`,
      params: {
        query: this.state.userInput
      },
      headers: {
        'x-app-id': this.state.appId,
        'x-app-key': this.state.appKey
      }
    }).then(result => {
      let queryResult = result.data
      this.setState({ data: queryResult }, () => {
        this.props.toggleCard();
      })
      this.props.data(queryResult)
    })
  }

  render() {
    return (
      <form>
        <label htmlFor="search">Look up your favourite foods!</label>
        <input type="text" id="search" placeholder="e.g. Chicken nuggets" onChange={this.handleChange} onKeyDown={this.handleKeyPress} />
        <div className="buttons">
          <button type="submit">Compare</button>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </div>
      </form>
    )
  }
}

export default InputForm