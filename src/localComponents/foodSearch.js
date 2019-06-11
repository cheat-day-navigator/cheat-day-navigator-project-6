import React from 'react'
import ResultsPaginator from './foodSearchPage'

const SimpleCards = (props) => {
  if (!(props.detailed)) {
    return (
      <div className="resultsList">
        <ResultsPaginator 
          commonData={props.commonData}
          nutrientValues={props.nutrientValues}
          handleSaveItem={props.handleSaveItem}
          generateFirebaseId={props.generateFirebaseId}
          checkDuplicates={props.checkDuplicates}
          addToCompare={props.addToCompare}
          readMoreToggle={props.readMoreToggle}
          detailed={props.detailed} />
      </div>
    )
  } else { return null}
}

export default SimpleCards;