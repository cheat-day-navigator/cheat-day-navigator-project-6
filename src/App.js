import React, { Component } from 'react';
import './App.css';
import InputForm from './localComponents/inputForm'

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      nutriData: {},
      userInput: ''
    }
  }

  callBackData = (d) => {
    this.setState({nutriData : d})
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
        <InputForm data={this.callBackData}/>
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
