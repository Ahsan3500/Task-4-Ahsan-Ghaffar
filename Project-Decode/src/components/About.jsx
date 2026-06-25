function About() {
  return (
    <section id="about" className="about-section" style={{
      padding: '80px 40px',
      backgroundColor: '#A0D4E0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '60px',
      flexWrap: 'wrap',
    }}>

      {/* Left Side - Text */}
      <div style={{ maxWidth: '500px' }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: '#3a2e2e',
          marginBottom: '20px',
        }}>
          Who We Are
        </h2>
        <p style={{
          color: '#3a2e2e',
          fontSize: '1rem',
          lineHeight: '1.8',
          marginBottom: '20px',
        }}>
          Getaway Travels was founded with one simple mission — to help 
          people explore the beauty of Pakistan without the stress of 
          planning. We handle everything from transport to accommodation 
          so you can focus on making memories.
        </p>
        <p style={{
          color: '#3a2e2e',
          fontSize: '1rem',
          lineHeight: '1.8',
        }}>
          With over 5 years of experience and hundreds of happy travellers, 
          we are Pakistan's most trusted local tour organiser.
        </p>
      </div>

      {/* Right Side - Stats */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        {[
          { number: '500+', label: 'Happy Travellers' },
          { number: '50+', label: 'Destinations Covered' },
          { number: '5+', label: 'Years of Experience' },
        ].map((stat) => (
          <div key={stat.label} style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '25px 40px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}>
            <h3 style={{
              fontSize: '2rem',
              color: '#A5856F',
              margin: 0,
            }}>
              {stat.number}
            </h3>
            <p style={{
              color: '#555',
              margin: 0,
              fontSize: '0.95rem',
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default About