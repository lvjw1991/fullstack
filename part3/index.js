//node express
const express = require('express')
const app = express()
//日志
var morgan = require('morgan')
//解决跨越问题
const cors = require('cors')

const Person = require('./model/person')

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

//请求日志
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

//json parser
app.use(express.json())
//log
app.use(requestLogger)
//第三方 log
app.use(morgan('combined'))
//跨越
app.use(cors())

//全局报错
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

//全局错误处理
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.number === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

//查所有
app.get('/api/persons', (request, response) => {
	Person.find({}).then(persons => {
		response.json(persons)
	}) 
})

//增
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'name or number missing' 
    })
  }

  const person =  new Person({
    name: body.name,
    number: body.number
  })

  person.save()
  .then(savedNote => {
    response.json(savedNote)
  })
  .catch(error => next(error))
  
})

//查单个
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(result => {
      if (result) {
        response.json(result)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

//删
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//改
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const noteUpdate = {
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, noteUpdate, { new: true })
    .then(updatedNote => {
      response.json(updatedNote)
    })
    .catch(error => next(error))
})

//全局报错
app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})