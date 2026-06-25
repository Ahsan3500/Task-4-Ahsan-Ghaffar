const express = require('express')
const router = express.Router()
const Contact = require('../models/Contact')

// GET /api/contacts
router.get('/', (req, res, next) => {
  Contact.find({})
    .then(contacts => res.status(200).json(contacts))
    .catch(next)
})

// POST /api/contacts
router.post('/', (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ error: 'No data received' })
  }

  const { name, email, phone, package: pkg, message } = req.body

  if (!name || !email || !phone || !pkg || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const contact = new Contact({ name, email, phone, package: pkg, message })

  contact.save()
    .then(saved => {
      res.status(201).json({
        message: 'Booking received successfully!',
        contact: saved,
      })
    })
    .catch(next)
})

// PUT /api/contacts/:id
router.put('/:id', (req, res, next) => {
  const { name, email, phone, package: pkg, message } = req.body

  Contact.findByIdAndUpdate(
    req.params.id,
    { name, email, phone, package: pkg, message },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updated => {
      if (updated) {
        res.json(updated)
      } else {
        res.status(404).json({ error: 'Contact not found' })
      }
    })
    .catch(next)
})

// DELETE /api/contacts/:id
router.delete('/:id', (req, res, next) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(next)
})

module.exports = router