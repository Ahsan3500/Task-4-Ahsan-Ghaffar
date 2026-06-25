import { useState, useEffect } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  })

  const [packages, setPackages] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Fetch packages dynamically from DB for the dropdown
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/packages')
        if (!response.ok) throw new Error('Failed to fetch packages')
        const data = await response.json()
        setPackages(data)
      } catch (err) {
        // silently fail — dropdown will just be empty
      }
    }
    fetchPackages()
  }, [])

  // Auto-reset form after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', email: '', phone: '', package: '', message: '' })
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [submitted])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.package || !formData.message) {
      setError('Please fill in all fields!')
      return
    }

    setError('')
    setLoading(true)

    try {
      const response = await fetch('http://localhost:3001/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Something went wrong!')
        return
      }

      setSubmitted(true)

    } catch (err) {
      setError('Could not connect to server. Make sure backend is running!')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" style={{
        padding: '80px 40px',
        backgroundColor: '#A0D4E0',
        textAlign: 'center',
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '60px',
          maxWidth: '600px',
          margin: '0 auto',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}>
          <h2 style={{ color: '#A5856F', fontSize: '2rem', marginBottom: '20px' }}>
            🎉 Message Sent!
          </h2>
          <p style={{ color: '#555', fontSize: '1rem' }}>
            Thank you {formData.name}! We will contact you soon about your {formData.package} booking.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" style={{
      padding: '80px 40px',
      backgroundColor: '#A0D4E0',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#3a2e2e', marginBottom: '10px' }}>
        Get In Touch
      </h2>
      <p style={{ color: '#3a2e2e', marginBottom: '50px', fontSize: '1rem' }}>
        Ready to plan your next adventure? Contact us today!
      </p>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '50px',
        maxWidth: '600px',
        margin: '0 auto',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}>

        {error && (
          <p style={{ color: 'red', marginBottom: '20px', fontSize: '0.9rem' }}>
            ⚠️ {error}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            width: '100%', padding: '15px', marginBottom: '20px',
            borderRadius: '10px', border: '1px solid #ddd',
            fontSize: '1rem', boxSizing: 'border-box',
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            width: '100%', padding: '15px', marginBottom: '20px',
            borderRadius: '10px', border: '1px solid #ddd',
            fontSize: '1rem', boxSizing: 'border-box',
          }}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          style={{
            width: '100%', padding: '15px', marginBottom: '20px',
            borderRadius: '10px', border: '1px solid #ddd',
            fontSize: '1rem', boxSizing: 'border-box',
          }}
        />

        {/* Dynamic dropdown from MongoDB */}
        <select
          name="package"
          value={formData.package}
          onChange={handleChange}
          style={{
            width: '100%', padding: '15px', marginBottom: '20px',
            borderRadius: '10px', border: '1px solid #ddd',
            fontSize: '1rem', boxSizing: 'border-box', color: '#555',
          }}
        >
          <option value="">Select a Package</option>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.title}>
              {pkg.title}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{
            width: '100%', padding: '15px', marginBottom: '20px',
            borderRadius: '10px', border: '1px solid #ddd',
            fontSize: '1rem', boxSizing: 'border-box', resize: 'none',
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            backgroundColor: loading ? '#ccc' : '#A5856F',
            color: 'white',
            padding: '15px 40px',
            border: 'none',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

      </div>
    </section>
  )
}

export default Contact