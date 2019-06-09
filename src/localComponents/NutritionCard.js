import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class NutritionCard extends Component {

    constructor() {
        super();
        this.state = {
            itemList: []
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

    componentDidMount() {
        this.retrieveFirebase();
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

        if (isDuplicate === false) {
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
                <Carousel axis="vertical" showThumbs={false} className="wrapper">
                    {this.props.commonData && this.props.commonData.map((common, i) => {
                        return (
                            <div className="item-card" key={`${common.tag_id}-${i}`}>
                                <img src={common.photo.thumb} alt="" />
                                <button>Read More</button>
                                <div className="nutrition-card">
                                    <h2>{common && common.tag_name}</h2>
                                    <h3>Nutrition Facts</h3>
                                    <p className="line">{common && common.serving_qty} {common && common.serving_unit}</p>
                                    <ul>
                                        <li><p>Vitamin A</p><p>value</p></li>
                                        <li><p>Vitamin A</p><p>value</p></li>
                                        <li><p>Vitamin A</p><p>value</p></li>
                                        <li><p>Vitamin A</p><p>value</p></li>
                                    </ul>
                                </div>
                                <button onClick={this.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={this.generateFirebaseId(common.tag_name)}>{this.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default NutritionCard;