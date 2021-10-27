const express = require('express')
const app = express()
const port = 5678

const mongoose = require('mongoose')
mongoose.connect(
    'mongodb+srv://test001:xptmxmdlaekd@boilerplate.lvrrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log('MongoDB error: ', err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})