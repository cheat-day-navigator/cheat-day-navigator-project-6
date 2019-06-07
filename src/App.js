import React, { Component } from 'react';
import './App.css';
import InputForm from './localComponents/inputForm';
import Header from './localComponents/Header.js';
import NutritionCard from './NutritionCard.js';
import Footer from './Footer.js'

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      nutriData: {},
      userInput: '',
      nutritionVisible: false,

    }
  }

  callBackData = (d) => {
    this.setState({ nutriData: d })
  }


  showNutritionCard = () => {

    this.setState({
      nutritionVisible: true
    })
  }






  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <InputForm
            data={this.callBackData}
            toggleCard={this.showNutritionCard}
          />
          {this.state.nutritionVisible ? <NutritionCard
            data={this.state.nutriData.common}
          /> : null}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
