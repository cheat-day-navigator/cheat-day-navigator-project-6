import React, { Component } from 'react';
import firebase from './globalComponents/firebase';



class NutritionCard extends Component {

    handleClick = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        dbRef.push(this.props.data)


    }


    render() {
        return (
            <div className="gallery-field">
                <div className="item-card">
                    <img src={this.props.data && this.props.data[0].photo.thumb} alt="" />
                    <button>Read More</button>
                    <div className="nutrition-card">
                        <h2>{this.props.data && this.props.data[0].food_name}</h2>
                        <h3>Nutrition Facts</h3>
                        <p className="line">{this.props.data && this.props.data[0].serving_qty} {this.props.data && this.props.data[0].serving_unit}</p>
                        <ul>
                            <li><p>Vitamin A</p><p>value</p></li>
                            <li><p>Vitamin A</p><p>value</p></li>
                            <li><p>Vitamin A</p><p>value</p></li>
                            <li><p>Vitamin A</p><p>value</p></li>
                        </ul>
                        <button onClick={this.handleClick}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default NutritionCard;


