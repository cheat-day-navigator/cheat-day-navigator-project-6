import React, { Component } from 'react';
import './App.css';
import MakeCall from './globalComponents/axios'

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      NutriData: [],
      userInput: '',
    }
  }

  // Binding the user's input to create controlled information
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
    const output = this.state.userInput;
    console.log(output)
  }


  // Create an event listener for user input
  handleClick = (event) => {
    event.preventDefault();

    this.setState({
      NutriData: MakeCall(this.state.userInput)
    });

    console.log(this.state.NutriData);
  }



  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <h4>Superfood Navigation</h4>
            <ul className="menu">
              <li>Saved Items</li>
              <ul className="drop-down">
                <li>Saved Item</li>
              </ul>
            </ul>
          </nav>
          <h1>Superfood Navigation</h1>
          <h3>Learn about all your favourite foods!</h3>
        </header>
        <main>
          <form>
            <label htmlFor="search">Look up your favourite foods!</label>
            <input type="text" id="search" placeholder="e.g. Chicken nuggets" onChange = {this.handleChange} />
            <div className="buttons">
              <button type="submit">Compare</button>
              <button type="submit" onClick = {this.handleClick}>Submit</button>
            </div>
          </form>
          <div className="gallery-field">
            <button>Back</button>
            <div className="item-card">
              <img src="https://fillmurray.com/200/300" alt="" />
              <button>Read More</button>
              <div className="nutrition-card">
                <h3>Nutrition Facts</h3>
                <p className="line">1 serving</p>
                <ul>
                  <li><p>Vitamin A</p><p>value</p></li>
                  <li><p>Vitamin A</p><p>value</p></li>
                  <li><p>Vitamin A</p><p>value</p></li>
                  <li><p>Vitamin A</p><p>value</p></li>
                </ul>
              </div>
            </div>
            <button>Next</button>
          </div>
        </main>
        <footer>
          <p>Made by Inder, Chitra, Paul, and Kat using the Nutrionix API</p>
        </footer>
      </div>
    );
  }
}

export default App;
