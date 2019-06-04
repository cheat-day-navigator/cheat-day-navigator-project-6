import axios from 'axios';

const MakeCall = (appQuery) => {

  const url = `https://trackapi.nutritionix.com/v2/search/instant`

  // const appKey = YOUR API KEY HERE BETWEEN SINGLE QUOTES
  // const appId = YOUR APP ID HERE BETWEEN SINGLE QUOTES

  axios({
    method: `GET`,
    url: url,
    dataResponse: `json`,
    headers: {
      'x-app-id': appId,
      'x-app-key': appKey
    },
    params: {
      'query': appQuery
    }
  }).then(response => {
    return (response)
  })
}

export default MakeCall