import axios from 'axios';

const MakeCall = (appQuery) => {

  const url = `https://trackapi.nutritionix.com/v2/search/instant`

  const appId = 'b3b57eaf'
  const appKey = 'aca04b0312df7f5382fe783ade15b363'

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
    const output = {}
    output = response
    return (output)
  })
}

export default MakeCall