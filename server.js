if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')

mongoose
  .connect(mongoUri, {})
  .then(() => console.log('MongoDB db connected...'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => res.send('Holaa'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
