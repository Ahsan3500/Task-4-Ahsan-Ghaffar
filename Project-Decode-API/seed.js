require('dotenv').config()
const mongoose = require('mongoose')
const Package = require('./models/Package')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error:', err.message))

const packages = [
  {
    title: 'Northern Areas Tour',
    description: 'Explore the breathtaking beauty of Hunza, Gilgit and Skardu.',
    duration: '7 Days / 6 Nights',
    price: 45000,
  },
  {
    title: 'Swat Valley Escape',
    description: 'Experience the lush green valleys and waterfalls of Swat.',
    duration: '4 Days / 3 Nights',
    price: 25000,
  },
  {
    title: 'Lahore Heritage Trip',
    description: 'Discover the rich culture, food and history of Lahore.',
    duration: '3 Days / 2 Nights',
    price: 15000,
  },
]

Package.deleteMany({})
  .then(() => Package.insertMany(packages))
  .then(result => {
    console.log(` ${result.length} packages seeded successfully!`)
    result.forEach(p => console.log(`   → ${p.title}`))
    mongoose.connection.close()
  })
  .catch(err => {
    console.error('Seeding failed:', err.message)
    mongoose.connection.close()
  })