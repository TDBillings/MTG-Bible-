const axios = require('axios');
const path = require('path');

const apiHost = 'http://api.scryfall.com'

let getCards = (offset, limit) => {
  let url = new URL('/cards/search/', apiHost)
  url.searchParams.append('q', 'legal:standard')
  url.searchParams.append('limit', limit || 0)
  url.searchParams.append('offset', offset || 0) 
  url.searchParams.append('order', 'usd') 
  console.log(url.href)
  return axios.get(url.href)
  // .then((res) => {
  //   console.log(res.data)
  // })
  .catch(err => console.log(err))
}

module.exports = getCards