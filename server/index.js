const express = require('express')
const getCards = require('./getCards')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  let offset = parseInt(req.query.offset) || 0;
  let limit = parseInt(req.query.limit) || 10;

  getCards(req.query).then((data) => {

    console.log(Object.keys(data))
    
    let d = data.data
    
    d.data = getRange(offset, offset+limit-1).map((r) => d.data[r])
    // data.data = data.data.filter((d, i) => i >= 0 && i <=10)
    console.log(Object.keys(d))
    
    res.json(d)
  })
  .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function getRange(start, end) {
  let res = []
  for (var i = start; i <=end; i++) {
      res.push(i)
  }

  return res
}
