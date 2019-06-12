import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "./../styles/carousel.css";

// creating a simple component that will render all the nutrition information
const DetailedCards = (props) => {
  if (props.detailed) {
    return (
      <React.Fragment>
        <Carousel showThumbs={false} className="carousel-results" swipeable={false} useKeyboardArrows>
          {props.commonData && props.commonData.map((common, i) => {
            let thisValues = props.nutrientValues.map((n) => {
              let capturedNutrients = common.full_nutrients.find((key) => key.attr_id === n.attr_id)
              return capturedNutrients
            })
            return (
              <div className="carousel-results">
                <div className="card-info">
                  <div className="item-card" key={`${common.tag_id}-${i}`}>
                    <img src={common.photo.thumb} alt="" />
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
                              <li><p>{props.nutrientValues[id].usda_nutr_desc}</p><p>{n.value.toFixed(2)} {props.nutrientValues[id].unit}</p></li>
                            )
                          }
                        }
                        )}
                      </ul>
                    </div>
                    <button onClick={props.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={props.generateFirebaseId(common.tag_name)}>{props.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                    <button className="compare-btn" onClick={props.addToCompare} id={i} value={common.tag_name}>Add to Compare List</button>
                  </div>
                </div>
              </div>
            )
          })}
        </Carousel>
        <button onClick={props.readMoreToggle}>Fewer details</button>
      </React.Fragment>
    )
  } else { return null }
}

export default DetailedCards;