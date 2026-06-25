function Hero() {
  return (
    <section id="home" className="hero" style={{
      height: '90vh',
      backgroundColor: '#A0D4E0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
    }}>

      {/* Main Heading */}
      <h1 style={{
        fontSize: '3rem',
        color: '#3a2e2e',
        marginBottom: '20px',
      }}>
        Discover Pakistan's Hidden Gems
      </h1>

      {/* Subheading */}
      <p style={{
        fontSize: '1.2rem',
        color: '#3a2e2e',
        marginBottom: '40px',
        maxWidth: '600px',
      }}>
        We plan everything. You just show up and enjoy.
      </p>

      {/* Button */}
      <button onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })} 
      style={{
        backgroundColor: '#A5856F',
        color: 'white',
        padding: '15px 40px',
        border: 'none',
        borderRadius: '30px',
        fontSize: '1rem',
        cursor: 'pointer',
      }}>
        Explore Packages
      </button>

    </section>
  )
}

export default Hero