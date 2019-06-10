import React, { Component } from 'react'
import Swal from 'sweetalert2'
import firebase from "./../globalComponents/firebase"
import MakeCall from "./../globalComponents/makeCall"

class InputForm extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
      userInput: ''
    }
  }

  // handleClickTwo = (e) => {
  //   e.preventDefault();
  //   const dbRef = firebase.database().ref("searchresults/");
  //   // console.log(this.state.userInput)
  //   dbRef.push(this.state.userInput)
  //   console.log(this.state.userInput)
  // }



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

  clearForm = () => {
    document.getElementById('main-form').reset();
  }

  // Create an event listener for user input
  handleClick = (event) => {
    event.preventDefault();
    this.props.loading(true)
    const dbRef = firebase.database().ref("searchresults/");
    dbRef.push(this.state.userInput)
    MakeCall('simpleSearch',this.state.userInput).then(result => {
      let queryResult = result
      if (queryResult.common.length > 0) {
        this.setState({ data: queryResult }, () => {
          this.props.toggleCard();
        })
        this.props.data(queryResult)
      } else {
        this.clearForm();
        this.props.loading(false)
        return Swal.fire({
          title: 'Oops!',
          text: `We can't find that food! Try something else!`,
          type: 'error',
          confirmButtonText: 'Okay'
        })
      }
    }).then(() => {
      setTimeout(() => {
        this.props.loading(false)
      }, 3000)
    })
  }

  render() {
    return (
      <form id="main-form">
        <label htmlFor="search">Look up your favourite foods and find the nutrient information!</label>
        <input type="text" id="search" placeholder="e.g. Chicken nuggets" onChange={this.handleChange} onKeyDown={this.handleKeyPress} />
        <div className="buttons">
          <button type="submit">Compare</button>
          <button type="submit" onClick={this.handleClick}>Submit</button>
        </div>
      </form >
    )
  }
}

export default InputForm