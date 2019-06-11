import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "./../styles/carousel.css";

const SimpleCards = (props) => {
  if (!(props.detailed)) {
    let commonData = []
    if (props.commonData !== undefined) {
      commonData = props.commonData
      let results1 = commonData.slice(0, 4)
      let results2 = []
      let results3 = []
      let results4 = []
      let arraySize = 5
      if (commonData.length > 5) {
        arraySize = 10
        results2 = commonData.slice(5, 9)
      }
      if (commonData.length > 10) {
        arraySize = 15
        results3 = commonData.slice(10, 14)
      }
      if (commonData.length > 15) {
        arraySize = 20
        results4 = commonData.slice(15, 19)
      }
    }
    console.log(props.commonData, 'props.commondata')
    return (
      <Carousel showThumbs={false} className="wrapper" swipeable={false} useKeyboardArrows>
        {commonData && commonData.map((common, i) => {
          return (
            <div className="wrapper">
              <div className="card-info">
                <div className="item-card" key={`${common.tag_id}-${i}`}>
                  <img src={common.photo.thumb} alt="" />
                  <button onClick={props.readMoreToggle}>Read More</button>
                  <div className="nutrition-card">
                    <h2>{common && common.tag_name}</h2>
                    <h3>Nutrition Facts</h3>
                    <p className="line">{common && common.serving_qty} {common && common.serving_unit}</p>
                  </div>
                  <button onClick={props.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={props.generateFirebaseId(common.tag_name)}>{props.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                  <button className="compare-btn" onClick={props.addToCompare} id={i} value={common.tag_name}>Add to Compare List</button>
                </div>
              </div>
              {console.log('it ran')}
            </div>
          )
        })}
      </Carousel>
    )
  } else { return null }
}

export default SimpleCards;