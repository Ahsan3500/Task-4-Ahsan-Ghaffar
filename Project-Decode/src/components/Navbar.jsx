import { useState } from 'react'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: '#A5856F',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    }}>

      <h1 style={{ color: 'white', margin: 0 }}>
        Getaway Travels
      </h1>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger"
        style={{
          display: 'none',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1.8rem',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? 'X' : '='}
      </button>

      <ul className="nav-links" style={{
        display: 'flex',
        listStyle: 'none',
        gap: '30px',
        margin: 0,
        padding: 0,
      }}>
        <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="#packages" style={{ color: 'white', textDecoration: 'none' }}>Packages</a></li>
        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="#gallery" style={{ color: 'white', textDecoration: 'none' }}>Gallery</a></li>
        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>

      {menuOpen && (
        <ul style={{
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: '#A5856F',
          listStyle: 'none',
          padding: '20px',
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          zIndex: 999,
        }}>
          <li><a href="#home" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#packages" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Packages</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#gallery" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Gallery</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)} style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      )}

    </nav>
  )
}

export default Navbar