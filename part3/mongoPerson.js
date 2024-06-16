const mongoose = require('mongoose')

const url =
   `mongodb://localhost:27017/`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: 'lyujianwei',
  number: '5797156',
})

/*person.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})*/

Person.find({}).then(result => {
  result.forEach(person => {
    console.log(person)
  })
  mongoose.connection.close()
})


