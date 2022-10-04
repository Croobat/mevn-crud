// dotenv: Load env variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// express: Load ExpressJS
const express = require('express')
const app = express()
// mongoose: Load MongoDB
const mongoose = require('mongoose')
const { PORT, mongoUri } = require('./config')
// cors: AJAX req from back to front
const cors = require('cors')
// morgan: Log every request to sv in the console
const morgan = require('morgan')
// bodyParser: transform body of every req to json
const bodyParser = require('body-parser')

// import API routes
const bucketListItemRoutes = require('./routes/api/bucketListItems')

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

mongoose
  .connect(mongoUri, {})
  .then(() => console.log('MongoDB db connected...'))
  .catch((err) => console.log(err))

app.use('/api/bucketListItems', bucketListItemRoutes)

app.get('/', (req, res) => res.send('Holaa'))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))
