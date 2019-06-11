import React, { Component } from 'react'
import './styles/App.css'
import InputForm from './localComponents/inputForm'
import Header from './localComponents/Header'
import NutritionCard from './localComponents/NutritionCard'
import Footer from './localComponents/Footer'
import MakeCall from './globalComponents/makeCall'
import LoadingModal from './localComponents/loadingModal'
import Swal from 'sweetalert2'
import ItemCardDetails from './localComponents/ItemCardDetails'
import CompareCard from './localComponents/CompareCard'
import firebase from 'firebase'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      nutriData: {},
      userInput: '',
      nutritionVisible: false,
      macroNutrients: {},
      loading: false,
      dropdownItems: [],
      showCompare: false,
      compareList: []
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
    }).catch(error => {
      console.log(error)
      this.setState({
        loading: false
      })
      return Swal.fire({
        title: 'Uh oh!',
        text: `Something happened on our end! Please try reloading!`,
        type: 'error',
        confirmButtonText: 'Okay'
      })
    })

    const dbRef = firebase.database().ref('comparedItems/');
    dbRef.on('value', (response) => {
      const compareList = [];
      const data = response.val();

      for (let key in data) {
        compareList.push({
          data: data[key]
        })
      }

      this.setState({
        compareList
      })
    })
  }

  showCompareResult = () => {
    this.setState({
      showCompare: true,
      nutritionVisible: false
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

  callBackFirebase = (e) => {
    this.setState({
      dropdownItems: e
    })
  }

  render() {
    return (
      <Router>
      <div className="App">
        {this.state.loading === true ?
          <LoadingModal />
          : null}
        {/* {console.log(this.state.macroNutrients)} */}
        <Header
          onCompareClick={this.showCompareResult}
          callbackHell = {this.callBackFirebase}
        />
        <main className="wrapper">
          <InputForm
            data={this.callBackData}
            toggleCard={this.showNutritionCard}
            value={this.state.userInput}
            loading={this.loadHandler}
          />
          <Route path ="/:tagID" render = { (props) => { return (
          <ItemCardDetails 
            {...props}
            details={this.state.dropdownItems}
            nutrients={this.state.macroNutrients}
          />)}}/>
        </main>
        {this.state.nutritionVisible ? <NutritionCard
          commonData={this.state.nutriData.common}
          brandedData={this.state.nutriData.branded}
          value={this.state.userInput}
          nutrients={this.state.macroNutrients}
        /> : null}
        {this.state.showCompare ?
          <CompareCard
            compareList={this.state.compareList}
            nutrients={this.state.macroNutrients}
          /> : null
        }
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
