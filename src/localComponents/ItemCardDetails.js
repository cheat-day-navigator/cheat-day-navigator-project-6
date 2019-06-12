import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import MakeCall from './../globalComponents/makeCall'
import LoadingModal from './loadingModal'
import Swal from 'sweetalert2'

class ItemCardDetails extends Component {
    constructor(props) {
        super(props);
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
            loading: false,
            nutrients: [],
            dataLoaded: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        // making the API call to extract the macroNutrients
        MakeCall('macroNutrients').then((response) => {
            let nutrients = this.extractNutrients(response)
            console.log('data loaded', nutrients)
            this.setState({
                nutrients,
                loading: false,
                dataLoaded: true
            })
        }).catch(error => {
            console.log(error)
            this.setState({
                loading: false
            })
            // if there is an error the loading screen will continue
            return Swal.fire({
                title: 'Uh oh!',
                text: `Something happened on our end! Please try reloading!`,
                type: 'error',
                confirmButtonText: 'Okay'
            })
        })
        // error handling with sweet alerts is user input is incorrect



    }

    extractNutrients(macroNutrients) {
        let nutrients = []
        // creating an empty array to set state with
        console.log('macronutrientS', macroNutrients)
        for (let i = 0; i < this.state.nutrientValues.length; i++) {
            let nutrientId = this.state.nutrientValues[i].attr_id;
            console.log(nutrientId, 'nutrient id')
            // looping over nutrients values and grabbing the attribute ID
            let macroNutrient = macroNutrients.find((item) => item.attr_id === nutrientId)
            // finding each item and seeing if attribute ID matches nutrient ID
            console.log('macronutrient', macroNutrient)
            nutrients.push({
                attr_id: macroNutrient.attr_id,
                usda_nutr_desc: macroNutrient.usda_nutr_desc,
                unit: macroNutrient.unit
            })
            // pusing the values to see the empty array
        }
        return nutrients
    }

    render() {
        if (this.state.dataLoaded === false) {
            console.log('no data rendering empty')
            return null
        }
        const itemNutrients = [];
        this.state.nutrients.forEach((nutrient) => {
            let itemNutrient = this.props.item.full_nutrients.find((item) => {
                if (item.attr_id === nutrient.attr_id) {
                    return true
                } else {
                    return false
                }
            })
            if (itemNutrient) {
                itemNutrients.push({
                    value: itemNutrient.value,
                    unit: nutrient.unit,
                    description: nutrient.usda_nutr_desc
                })
            }
        })
        console.table(itemNutrients)
        return (
            <div className="show-selected">
                {this.state.loading === true ?
                    <LoadingModal />
                    : null}
                <div className="card-info">
                    <div className="item-info">
                        <img src={this.props.item && this.props.item.photo.thumb} alt="" />
                        <div className="nutrition-card">
                            <h2>{this.props.item && this.props.item.tag_name}</h2>
                            <h3>Nutrition Facts</h3>
                            <p className="line">{this.props.item && this.props.item.serving_qty} {this.props.item && this.props.item.serving_unit}</p>
                            <ul>
                                {itemNutrients.map((nutrient) => {
                                    return (
                                        <li><p>{nutrient.description}</p><p>{nutrient.value.toFixed(2)} {nutrient.unit}</p></li>
                                    )
                                }
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default ItemCardDetails