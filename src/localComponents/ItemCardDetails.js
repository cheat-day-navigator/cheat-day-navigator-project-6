import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class ItemCardDetails extends Component {
    constructor(){
        super();
        this.state={
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
            item: null
        }
    }
    
    componentDidMount() {
        const selectedItem = this.props.details.find((key)=>key.tag_id === this.props.match.params.tagID) 
        // const item = {}
        // item.push(selectedItem)
        console.log(selectedItem)
        this.setState({
            item: selectedItem
        })
    }


    render() {
        console.log("state",this.state)
        return (
            <div className="show-selected">
                    <div className="card-info">
                        <div className="item-card">
                            <img src={this.state.item && this.state.item.photo.thumb} alt="" />
                            <div className="nutrition-card">
                                <h2>{this.state.item && this.state.item.tag_name}</h2>
                                <h3>Nutrition Facts</h3>
                                <p className="line">{this.state.item && this.state.item.serving_qty} {this.state.item && this.state.item.serving_unit}</p>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}


export default ItemCardDetails