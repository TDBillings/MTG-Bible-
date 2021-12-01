const express = require('express')
const getCards = require('./getCards')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  let offset = 0;
  let limit = 10;
  getCards(offset, limit).then((data) => {

    console.log(Object.keys(data))
    
    let d = data.data

    d.data = d.data.filter((d, i) => i >= offset && i < offset + limit)

    console.log(Object.keys(d))
    // data.data = data.data.filter((d, i) => i >= 0 && i <=10)
    res.json(d)
  })
  // res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})