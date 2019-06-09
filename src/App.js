import React, { Component } from 'react';
import './styles/App.css';
import InputForm from './localComponents/inputForm';
import Header from './localComponents/Header';
import NutritionCard from './localComponents/NutritionCard';
import Footer from './localComponents/Footer'
import MakeCall from './globalComponents/makeCall'

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
    MakeCall('macroNutrients').then((response) => {
      let newState = response
      this.setState({
        macroNutrients: newState
      })
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
}

export default App;
