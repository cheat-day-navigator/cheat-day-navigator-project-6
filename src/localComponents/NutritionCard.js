import React, { Component } from 'react';

class NutritionCard extends Component {
  constructor() {
    super();
    this.state = {
      cals: { 'attr_id': 208 },
      fats: { 'attr_id': 204 },
      carbs: { 'attr_id': 205 },
      sugars: { 'attr_id': 269 }
    }
  }

  componentDidMount() {
    const processInfo = (id) => {
      return this.props.nutrients.find((i) => i.attr_id === id )
    }
    this.setState({
      cals: processInfo(this.state.cals.attr_id),
      fats: processInfo(this.state.fats.attr_id),
      carbs: processInfo(this.state.carbs.attr_id),
      sugars: processInfo(this.state.sugars.attr_id)
    })
  }


  render() {
    return (
      <div className="gallery-field">
        {console.log(this.state)}
        {this.props.commonData && this.props.commonData.map((common, i) => {
          let cals = common.full_nutrients.find((i) => i.attr_id === this.state.cals.attr_id)
          let fats = common.full_nutrients.find((i) => i.attr_id === this.state.fats.attr_id)
          let carbs = common.full_nutrients.find((i) => i.attr_id === this.state.carbs.attr_id)
          let sugars = common.full_nutrients.find((i) => i.attr_id === this.state.sugars.attr_id)
          return (
            <div className="item-card" key={`${common.tag_id}-${i}`}>
            {console.log(common)}
              <img src={common.photo.thumb} alt="" />
              <button>Read More</button>
              <div className="nutrition-card">
                <h2>{common && common.tag_name}</h2>
                <h3>Nutrition Facts</h3>
                <p className="line">{common && common.serving_qty} {common && common.serving_unit}</p>
                <ul>
                  <li><p>Energy</p><p>{cals === undefined ? '0' : cals.value.toFixed(2) } {this.state.cals.unit}</p></li>
                  <li><p>Total lipid (fat)</p><p>{fats === undefined ? '0' : fats.value.toFixed(2) } {this.state.fats.unit}</p></li>
                  <li><p>Carbohydrates</p><p>{carbs === undefined ? '0' : carbs.value.toFixed(2) } {this.state.carbs.unit}</p></li>
                  <li><p>Sugars, total</p><p>{sugars === undefined ? '0' : sugars.value.toFixed(2) } {this.state.sugars.unit}</p></li>
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