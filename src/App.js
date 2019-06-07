import React, { Component } from 'react';
import './App.css';
import InputForm from './localComponents/inputForm';
import Header from './localComponents/Header.js';
import NutritionCard from './NutritionCard.js';
import Footer from './Footer.js'
import APIData from './localComponents/apiData'
import axios from "axios"

class App extends Component { 
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      nutriData: {},
      userInput: '',
      nutritionVisible: false,
      macroNutrients: {}
    }
  }

  componentDidMount() {
    const appKeyGrab = APIData.appKey
    const appIdGrab = APIData.appId
    axios({
      url: 'https://trackapi.nutritionix.com/v2/utils/nutrients',
      method: `GET`,
      dataResponse: `json`,
      headers: {
        'x-app-id': appIdGrab,
        'x-app-key': appKeyGrab
      }
    }).then(result => {
      this.setState({ macroNutrients: result.data })
<<<<<<< HEAD
      console.log(result.data)
    })
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
            value={this.state.userInput}
          />
          {this.state.nutritionVisible ? <NutritionCard
            commonData={this.state.nutriData.common}
            brandedData={this.state.nutriData.branded}
            value={this.state.userInput}
            nutrients={this.state.macroNutrients}
          /> : null}
        </main>
        <Footer />
      </div>
    );
  }
=======
    })
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
          value={this.state.userInput}
        />
        {this.state.nutritionVisible ? <NutritionCard
          data={this.state.nutriData.common} value={this.state.userInput} nutrients={this.state.macroNutrients}
        /> : null}
      </main>
      <footer>
        <p>Made by Inder, Chitra, Paul, and Kat using the Nutrionix API</p>
      </footer>
    </div>
  );
}
>>>>>>> 61d0b1995ee507b1644d8c43d68385ea52dfe343
}

export default App;
