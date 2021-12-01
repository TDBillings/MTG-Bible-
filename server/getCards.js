const axios = require('axios');
const path = require('path');

const apiHost = 'http://api.scryfall.com'

const defaults = {
  q:'legal:standard',
  order:'usd'
}

// let getCards = (query) => {
//   let url = new URL('/cards/search/', apiHost)
//   url.searchParams.append('q', 'legal:standard')
//   url.searchParams.append('limit', limit || 0)
//   url.searchParams.append('offset', offset || 0) 
//   url.searchParams.append('order', 'usd') 
//   console.log(url.href)
//   return axios.get(url.href)
//   // .then((res) => {
//   //   console.log(res.data)
//   // })
//   .catch(err => console.log(err))
// }
let setParams = (url, params) => {
  Object.keys(params).forEach((key) => {
    url.searchParams.set(key, params[key])
  })
  return url
}


let getSearchURL = (query = {}) => {
  let url = new URL('/cards/search/', apiHost)
  let p = Object.assign({}, defaults, query)
  setParams(url, p)
  return url
}

let searchCards = (query) => {
  let url = getSearchURL(query)
  console.log(url.href)
  return axios.get(url.href)
}

module.exports = searchCards