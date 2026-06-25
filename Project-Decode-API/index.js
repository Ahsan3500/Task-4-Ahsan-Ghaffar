require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const packagesRouter = require('./routes/packages')
const contactRouter = require('./routes/contact')

const app = express()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message))

app.use(cors())
app.use(express.json())

app.use('/api/packages', packagesRouter)
app.use('/api/contacts', contactRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Getaway Travels API is running!' })
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})