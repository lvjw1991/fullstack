require('dotenv').config()

//let PORT = process.env.PORT
//let MONGODB_URI = process.env.MONGODB_URI
let PORT = 3001
let MONGODB_URI = 'mongodb://localhost:27017'
let SECRET = 'secret'

module.exports = {
  MONGODB_URI,
  PORT,
  SECRET
}