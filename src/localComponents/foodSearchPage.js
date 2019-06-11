import React from 'react'

const ResultsPaginator = (props) => {
  if (props.commonData !== undefined) {
    return (
      <div className="simple-results">
        {props.commonData && props.commonData.map((common, i) => {
          let thisValues = props.nutrientValues.map((n) => {
            let capturedNutrients = common.full_nutrients.find((key) => key.attr_id === n.attr_id)
            return capturedNutrients
          })
          return (
            <div className="result-list" key={`${common.tag_id}-${i}`}>
              <div className="item-header">
                <h2>{common && common.tag_name}</h2>
                <p className="line">{common && common.serving_qty} ({common && common.serving_unit})</p>
                <div className="thumb-container">
                  <img src={common.photo.thumb} alt="" />
                </div>
              </div>
              <div className="nutrition-card-simple">
                <h3>Nutrition Facts</h3>
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
              <div className="buttons-searched">
                <button onClick={props.handleSaveItem} className="save-item-btn" id={i} value={common.tag_name} data-id={props.generateFirebaseId(common.tag_name)}>{props.checkDuplicates(common.tag_name) ? 'Unsave Item' : 'Save Item'}</button>
                <button className="compare-btn" onClick={props.addToCompare} id={i} value={common.tag_name}>Add to Compare List</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  } else { return null }
}

export default ResultsPaginator