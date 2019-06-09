import React, { Component } from 'react';

class NutritionCard extends Component {

    // handleClick = (e) => {
    //     e.preventDefault();
    //     const dbRef = firebase.database().ref();
    //     dbRef.push(this.props.data)


    // }


    render() {
        return (
            <div className="gallery-field">
                {this.props.commonData && this.props.commonData.map((common, i) => {
                    console.log(common)
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
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default NutritionCard;