function Footer() {
  return (
    <footer style={{
      backgroundColor: '#3a2e2e',
      color: 'white',
      padding: '60px 40px 30px',
    }}>

      {/* Top Section */}
      <div className="footer-top" style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '40px',
      }}>

        {/* Brand */}
        <div style={{ maxWidth: '250px' }}>
          <h2 style={{ color: '#A5856F', marginBottom: '15px' }}>
            Getaway Travels
          </h2>
          <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '0.9rem' }}>
            Your trusted local tour organiser. We make travel easy,
            affordable and unforgettable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: '#A5856F', marginBottom: '15px' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '10px' }}>
              <a href="#home" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Home</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#packages" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Packages</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#about" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>About</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#gallery" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Gallery</a>
            </li>
            <li style={{ marginBottom: '10px' }}>
              <a href="#contact" style={{ color: '#aaa', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ color: '#A5856F', marginBottom: '15px' }}>
            Contact Us
          </h3>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>
            📍 Islamabad, Pakistan
          </p>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>
            📞 +92 300 1234567
          </p>
          <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>
            ✉️ info@getawaytravels.pk
          </p>
        </div>

      </div>

      {/* Divider */}
      <div style={{
        borderTop: '1px solid #555',
        paddingTop: '20px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#aaa', fontSize: '0.85rem' }}>
          2025 Getaway Travels. All rights reserved.
        </p>
      </div>

    </footer>
  )
}

export default Footer