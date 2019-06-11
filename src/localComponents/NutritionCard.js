import React, { Component } from 'react';
import firebase from './../globalComponents/firebase'
import DetailedCards from './detailedNutritionCard'
import SimpleCards from './foodSearch'

class NutritionCard extends Component {
  constructor() {
    super();
    this.state = {
      nutrientValues: [
        { attr_id: 208 }, // calories
        { attr_id: 204 }, // fats
        { attr_id: 205 }, // carbs
        { attr_id: 269 }, // sugars
        { attr_id: 318 }, // vitA
        { attr_id: 324 }, // vitD
        { attr_id: 415 }, // vitB6
        { attr_id: 401 }, // vitC
        { attr_id: 323 }, // vitE
        { attr_id: 304 }, // magnesium
        { attr_id: 309 }, // zinc
        { attr_id: 303 } // iron
      ],
      itemList: [],
      compareList: [],
      detailed: false
    }
  }

  componentDidMount() {
    this.retrieveFirebase();
    const processInfo = (id) => {
      return this.props.nutrients.find((i) => i.attr_id === id)
    }
    let currVal
    let newVals = []
    for (let i = 0; i < this.state.nutrientValues.length; i++) {
      currVal = processInfo(this.state.nutrientValues[i].attr_id)
      newVals[i] = { attr_id: currVal.attr_id, usda_nutr_desc: currVal.usda_nutr_desc, unit: currVal.unit }
    }
    this.setState({
      nutrientValues: newVals
    })
    this.retrieveCompareList();
  }

  readMoreToggle = () => {
    if (this.state.detailed === true) {
      this.setState({
        detailed: false
      })
    } else {
      this.setState({
        detailed: true
      })
    }
  }

  retrieveFirebase = () => {
    const dbRef = firebase.database().ref('savedItems/');
    dbRef.on('value', (response) => {
      const itemList = [];
      const data = response.val();

      for (let key in data) {
        itemList.push({
          name: data[key].tag_name,
          firebaseId: key
        })
      }

      this.setState({
        itemList
      })
    })
  }

  checkDuplicates = (item) => {
    const simpleArr = this.state.itemList.map(item => {
      return item.name
    })

    if (simpleArr.indexOf(item) > -1) {
      return true
    }
  }

  generateFirebaseId = (item) => {
    const simpleArr = this.state.itemList.map(item => {
      return item.name
    })

    const index = simpleArr.indexOf(item)

    if (index > -1) {
      return this.state.itemList[index].firebaseId
    }
  }

  retrieveCompareList = () => {
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

  addToCompare = (e) => {
    e.preventDefault();
    const position = e.target.id
    const dbRef = firebase.database().ref(`comparedItems/`)
    if (this.state.compareList.length < 6) {
      dbRef.push(this.props.commonData[position]);
    } else {
      dbRef.remove();
      dbRef.push(this.props.commonData[position]);
    }

    console.log(this.state.compareList.length)
  }

  handleSaveItem = (e) => {
    e.preventDefault();
    const position = e.target.id;
    const item = e.target.value;

    const isDuplicate = this.checkDuplicates(item)

    // undefined is false-y but it's not actually a boolean 
    if (!isDuplicate) {
      const dbRef = firebase.database().ref('savedItems/');
      dbRef.push(this.props.commonData[position]);
    } else {
      const itemRef = firebase.database().ref(`savedItems/${[e.target.dataset.id]}`)
      itemRef.remove();
    }
  }

  render() {
    return (
      <div className="gallery-field">
        <div className="wrapper">
          <SimpleCards
            commonData={this.props.commonData}
            handleSaveItem={this.handleSaveItem}
            generateFirebaseId={this.generateFirebaseId}
            checkDuplicates={this.checkDuplicates}
            addToCompare={this.addToCompare}
            readMoreToggle={this.readMoreToggle}
            detailed={this.state.detailed}
          />
          <DetailedCards
            commonData={this.props.commonData}
            nutrientValues={this.state.nutrientValues}
            handleSaveItem={this.handleSaveItem}
            generateFirebaseId={this.generateFirebaseId}
            checkDuplicates={this.checkDuplicates}
            addToCompare={this.addToCompare}
            readMoreToggle={this.readMoreToggle}
            detailed={this.state.detailed}
          />
        </div>
      </div>
    )
  }
}


export default NutritionCard;