import axios from 'axios';

const MakeCall = (appQuery) => {

  const url = `https://trackapi.nutritionix.com/v2/search/instant`

  const appKey = "fac5feffeb9338a324d4db92881fe381"
  const appId = "c4b8e395"

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