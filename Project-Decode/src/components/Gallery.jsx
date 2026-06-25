const images = [
  {
    id: 1,
    title: "Hunza Valley",
    url: "https://picsum.photos/seed/hunza/600/400",
  },
  {
    id: 2,
    title: "Swat Valley",
    url: "https://picsum.photos/seed/swat/600/400",
  },
  {
    id: 3,
    title: "Lahore Fort",
    url: "https://picsum.photos/seed/lahore/600/400",
  },
  {
    id: 4,
    title: "Fairy Meadows",
    url: "https://picsum.photos/seed/fairy/600/400",
  },
  {
    id: 5,
    title: "Skardu",
    url: "https://picsum.photos/seed/skardu/600/400",
  },
  {
    id: 6,
    title: "Neelum Valley",
    url: "https://picsum.photos/seed/neelum/600/400",
  },
]

function Gallery() {
  return (
    <section id="gallery" style={{
      padding: '80px 40px',
      backgroundColor: '#F2F0EA',
      textAlign: 'center',
    }}>

      {/* Section Heading */}
      <h2 style={{
        fontSize: '2.5rem',
        color: '#3a2e2e',
        marginBottom: '10px',
      }}>
        Gallery
      </h2>
      <p style={{
        color: '#777',
        marginBottom: '50px',
        fontSize: '1rem',
      }}>
        A glimpse of what awaits you
      </p>

      {/* Image Grid */}
      <div className="gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {images.map((image) => (
          <div key={image.id} style={{
            borderRadius: '15px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          }}>
            <img
                src={image.url}
                alt={image.title}
                loading="lazy"
                style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block',
                }}
              onError={(e) => {
                e.target.style.backgroundColor = '#A0D4E0'
                e.target.style.height = '200px'
              }}
            />
            <div style={{
              padding: '10px',
              backgroundColor: 'white',
            }}>
              <p style={{
                color: '#A5856F',
                fontWeight: 'bold',
                margin: 0,
              }}>
                {image.title}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Gallery