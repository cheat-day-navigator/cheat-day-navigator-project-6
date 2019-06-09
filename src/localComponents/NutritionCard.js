import React, { Component } from 'react';
import firebase from './../globalComponents/firebase.js'

class NutritionCard extends Component {

    constructor() {
        super();
        this.state = {
            foodItem: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref('savedItems/');
        dbRef.push(this.props.commonData)
        console.log('clicked')
    }


    render() {
        return (
            <div className="gallery-field">
                {this.props.commonData && this.props.commonData.map((common, i) => {
                    return (
                        <div className="item-card" key={common.tag_id}>
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
                            <button onClick={this.handleClick()} className="save-item-btn" id={i}>Save Item</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default NutritionCard;