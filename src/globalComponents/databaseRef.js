import axios from 'axios'

const ReferParams = () => {
  axios({
    method: `GET`,
    url: `../localData/params.json`,
    dataResponse: `json`,
  }).then(response => {
    return (response)
  })
}

export default ReferParams