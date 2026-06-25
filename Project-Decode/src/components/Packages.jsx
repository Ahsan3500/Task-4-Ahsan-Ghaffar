import { useState, useEffect } from 'react'

function Packages() {
  const [packages, setPackages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/packages')

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`)
        }

        const data = await response.json()
        setPackages(data)
      } catch (err) {
        setError('Could not load packages. Make sure backend is running!')
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  if (loading) return (
    <section id="packages" style={{ padding: '80px 40px', textAlign: 'center' }}>
      <p>Loading packages...</p>
    </section>
  )

  if (error) return (
    <section id="packages" style={{ padding: '80px 40px', textAlign: 'center' }}>
      <p style={{ color: 'red' }}>{error}</p>
    </section>
  )

  return (
    <section id="packages" style={{
      padding: '80px 40px',
      backgroundColor: '#F2F0EA',
      textAlign: 'center',
    }}>
      <h2 style={{ fontSize: '2.5rem', color: '#3a2e2e', marginBottom: '10px' }}>
        Our Packages
      </h2>
      <p style={{ color: '#777', marginBottom: '50px', fontSize: '1rem' }}>
        Handpicked local tours just for you
      </p>

      <div className="packages-grid" style={{
        display: 'flex',
        gap: '30px',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card" style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '30px',
            width: '280px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            textAlign: 'left',
          }}>
            <h3 style={{ color: '#A5856F', marginBottom: '10px', fontSize: '1.2rem' }}>
              {pkg.title}
            </h3>
            <p style={{ color: '#555', marginBottom: '15px', fontSize: '0.95rem' }}>
              {pkg.description}
            </p>
            <p style={{ color: '#888', fontSize: '0.9rem' }}>⏱ {pkg.duration}</p>
            <p style={{ color: '#A5856F', fontWeight: 'bold', fontSize: '1.1rem', marginTop: '10px' }}>
              PKR {pkg.price.toLocaleString()}
            </p>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                marginTop: '20px',
                backgroundColor: '#A5856F',
                color: 'white',
                padding: '10px 25px',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Packages