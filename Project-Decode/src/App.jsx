import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Packages from './components/Packages'
import About from './components/About'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App