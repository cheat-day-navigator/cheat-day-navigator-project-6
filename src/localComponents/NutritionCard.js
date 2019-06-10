import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
      compareList: []
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
          <Carousel showThumbs={false} className="wrapper" swipeable={false}>
            {this.props.commonData && this.props.commonData.map((common, i) => {
              let thisValues = this.state.nutrientValues.map((n, id) => {
                let capturedNutrients = common.full_nutrients.find((key) => key.attr_id === n.attr_id)
                return capturedNutrients
              })
              return (
                <div className="wrapper">
                  <div className="item-card" key={`${common.tag_id}-${i}`}>
                    <img src={common.photo.thumb} alt="" />
                    <button>Read More</button>
                    <div className="nutrition-card">
                      <h2>{common && common.tag_name}</h2>
                      <h3>Nutrition Facts</h3>
                      <p className="line">{common && common.serving_qty} {common && common.serving_unit}</p>
                      <ul>
                        {thisValues.map((n, id) => {
                          if (n === undefined) {
                            return null
                          } else {
                            return (
                              <li><p>{this.state.nutrientValues[id].usda_nutr_desc}</p><p>{n.value.toFixed(2)} {this.state.nutrientValues[id].unit}</p></li>
                            )
                          }
                        }
                        )}
                      </ul>
                    </div>
                    <button onClick={this.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={this.generateFirebaseId(common.tag_name)}>{this.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                    <button className="compare-btn" onClick={this.addToCompare} id={i} value={common.tag_name}>Add to Compare List</button>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    )
  }
}

export default NutritionCard;