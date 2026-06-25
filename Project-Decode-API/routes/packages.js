const express = require('express')
const router = express.Router()
const Package = require('../models/Package')

// GET /api/packages
router.get('/', (req, res, next) => {
  Package.find({})
    .then(packages => res.status(200).json(packages))
    .catch(next)
})

// GET /api/packages/:id
router.get('/:id', (req, res, next) => {
  Package.findById(req.params.id)
    .then(package_ => {
      if (package_) {
        res.status(200).json(package_)
      } else {
        res.status(404).json({ error: 'Package not found' })
      }
    })
    .catch(next)
})

// PUT /api/packages/:id
router.put('/:id', (req, res, next) => {
  const { title, description, duration, price } = req.body

  Package.findByIdAndUpdate(
    req.params.id,
    { title, description, duration, price },
    { new: true, runValidators: true, context: 'query' }
  )
    .then(updated => {
      if (updated) {
        res.json(updated)
      } else {
        res.status(404).json({ error: 'Package not found' })
      }
    })
    .catch(next)
})

// DELETE /api/packages/:id
router.delete('/:id', (req, res, next) => {
  Package.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).end())
    .catch(next)
})

// POST /api/packages
router.post('/', (req, res, next) => {
  const { title, description, duration, price } = req.body

  if (!title || !description || !duration || !price) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const package_ = new Package({ title, description, duration, price })

  package_.save()
    .then(saved => res.status(201).json(saved))
    .catch(next)
})

module.exports = router