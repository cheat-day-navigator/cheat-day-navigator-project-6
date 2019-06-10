import React, { Component } from 'react'
import './styles/App.css'
import InputForm from './localComponents/inputForm'
import Header from './localComponents/Header'
import NutritionCard from './localComponents/NutritionCard'
import Footer from './localComponents/Footer'
import MakeCall from './globalComponents/makeCall'
import LoadingModal from './localComponents/loadingModal'

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      nutriData: {},
      userInput: '',
      nutritionVisible: false,
      macroNutrients: {},
      loading: false
    }
  }


  componentDidMount() {
    this.setState({
      loading: true
    })
    MakeCall('macroNutrients').then((response) => {
      let newState = response
      this.setState({
        macroNutrients: newState
      })
    }).then(() => {
      setTimeout(() => {
        this.setState({
          loading: false
        })
      }, 1000)
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

  loadHandler = (s) => {
    this.setState({
      loading: s
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loading === true ?
          <LoadingModal />
          : null}
        {console.log(this.state.macroNutrients)}
        <Header />
        <main>
          <InputForm
            data={this.callBackData}
            toggleCard={this.showNutritionCard}
            value={this.state.userInput}
            loading={this.loadHandler}
          />
        </main>
          {this.state.nutritionVisible ? <NutritionCard
            commonData={this.state.nutriData.common}
            brandedData={this.state.nutriData.branded}
            value={this.state.userInput}
            nutrients={this.state.macroNutrients}
          /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
