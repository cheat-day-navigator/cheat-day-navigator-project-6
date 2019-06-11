import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import {Link} from 'react-router-dom';

class NutritionCard extends Component {
  constructor() {
    super();
    this.state = {
      cals: { 'attr_id': 208 },
      fats: { 'attr_id': 204 },
      carbs: { 'attr_id': 205 },
      sugars: { 'attr_id': 269 },
      itemList: []
    }
  }

  componentDidMount() {
    this.retrieveFirebase();
    const processInfo = (id) => {
      return this.props.nutrients.find((i) => i.attr_id === id)
    }
    this.setState({
      cals: processInfo(this.state.cals.attr_id),
      fats: processInfo(this.state.fats.attr_id),
      carbs: processInfo(this.state.carbs.attr_id),
      sugars: processInfo(this.state.sugars.attr_id)
    })
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

  handleSaveItem = (e) => {
    e.preventDefault();
    const position = e.target.id;
    const item = e.target.value;

    const isDuplicate = this.checkDuplicates(item)
    console.log(isDuplicate)
    console.log('item', item)

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
        <Carousel showThumbs={false} className="wrapper" swipeable={false}>
          {this.props.commonData && this.props.commonData.map((common, i) => {
            let cals = common.full_nutrients.find((i) => i.attr_id === this.state.cals.attr_id)
            let fats = common.full_nutrients.find((i) => i.attr_id === this.state.fats.attr_id)
            let carbs = common.full_nutrients.find((i) => i.attr_id === this.state.carbs.attr_id)
            let sugars = common.full_nutrients.find((i) => i.attr_id === this.state.sugars.attr_id)
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
                      <li><p>Energy</p><p>{cals === undefined ? '0' : cals.value.toFixed(2)} {this.state.cals.unit}</p></li>
                      <li><p>Total lipid (fat)</p><p>{fats === undefined ? '0' : fats.value.toFixed(2)} {this.state.fats.unit}</p></li>
                      <li><p>Carbohydrates</p><p>{carbs === undefined ? '0' : carbs.value.toFixed(2)} {this.state.carbs.unit}</p></li>
                      <li><p>Sugars, total</p><p>{sugars === undefined ? '0' : sugars.value.toFixed(2)} {this.state.sugars.unit}</p></li>
                    </ul>
                  </div>
                  <button onClick={this.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={this.generateFirebaseId(common.tag_name)}>{this.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default NutritionCard;