import axios from 'axios'
import APIData from '../localComponents/apiData'
import Swal from 'sweetalert2'

// A global, multipurpose axios function that can handle multiple different kinds of API calls

const MakeCall = (searchtype = `simpleSearch`, appQuery = `chicken nuggets`) => {
  const appKeyGrab = APIData.appKey // grab local key (will remove on build)
  const appIdGrab = APIData.appId // grab local id (will remove on build)
  let urlType = '' // Determining what kind of API call to do
  let methodType = `GET` // Defaulting API method to GET
  let parameters = {} // Determining which params (if applicable) to add to API call


// creating a variable for sweet alert
  const warningFire = (warning) => {
    Swal.fire({
      title: 'Oops!',
      text: warning,
      type: 'error',
      confirmButtonText: 'Okay'
    })
  }


  if (searchtype === `macroNutrients`) { // Macronutrient call
    urlType = `https://trackapi.nutritionix.com/v2/utils/nutrients`

  } else if (searchtype === `simpleSearch`) { // Regular food search
    urlType = `https://trackapi.nutritionix.com/v2/search/instant`
    parameters = {
      'query': appQuery,
      'detailed': true
    }

  } else if (searchtype === `readMore`) { // Information call for specific food result. ONLY BRANDS HAVE A NTX_ITEM_ID
    urlType = 'https://trackapi.nutritionix.com/v2/search/item'
    parameters = {
      'ntx_item_id': appQuery
    }
  } else {
    console.log(`Invalid or missing searchtype prop. Make sure your first prop when using MakeCall() is either 'macroNutrients', 'simpleSearch', or 'readMore'!`)
  }

  // axios call to the API using the API key and ID
  return (
    axios({
      method: methodType,
      url: urlType,
      dataResponse: `json`,
      headers: {
        'x-app-id': appIdGrab,
        'x-app-key': appKeyGrab
      },
      params: parameters
    }).then(response => {
      return response.data
    }).catch(error => {  // If nothing matched, something went wrong on your end!
      console.log(error)
      warningFire(`Something went wrong on our end! Please wait a moment, and try your search again!`)
    })
  )
}


export default MakeCall