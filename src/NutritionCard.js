import React, { Component } from 'react';

class NutritionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                {/* {this.props.data.map(food => {
                    return console.log(food);
                })} */}
                <div className="gallery-field">
                    <button>Back</button>
                    <div className="item-card">
                        <img src="https://fillmurray.com/200/300" alt="" />
                        <button>Read More</button>
                        <div className="nutrition-card">
                            <h3>Nutrition Facts</h3>
                            <p className="line">1 serving</p>
                            <ul>
                                <li><p>Vitamin A</p><p>value</p></li>
                                <li><p>Vitamin A</p><p>value</p></li>
                                <li><p>Vitamin A</p><p>value</p></li>
                                <li><p>Vitamin A</p><p>value</p></li>
                            </ul>
                        </div>
                    </div>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}
export default NutritionCard;


