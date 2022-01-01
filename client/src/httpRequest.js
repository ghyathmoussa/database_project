import axios from 'axios' // to get api response

export default axios.create({
    baseURL: 'http://localhost:4000',
    headers:{
      'Content-type':'applicatio/json'
    }
  })
