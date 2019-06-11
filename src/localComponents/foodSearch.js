import React from 'react'
import ResultsPaginator from './foodSearchPage'
import './../styles/simpleStyles.css'

const SimpleCards = (props) => {
  if (!(props.detailed)) {
    return (
      <React.Fragment>
        <ResultsPaginator
          commonData={props.commonData}
          nutrientValues={props.nutrientValues}
          handleSaveItem={props.handleSaveItem}
          generateFirebaseId={props.generateFirebaseId}
          checkDuplicates={props.checkDuplicates}
          addToCompare={props.addToCompare}
          detailed={props.detailed} />
        <button onClick={props.readMoreToggle}>More details</button>
      </React.Fragment>
    )
  } else { return null }
}

export default SimpleCards;