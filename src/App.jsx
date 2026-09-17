import './App.css'
import backgroundImage from './assets/background_img.png'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

function App() {
  return (
    <main className="portfolio" style={{ '--portfolio-background': `url(${backgroundImage})` }}>
      <div className="portfolio-container">
        <div className="page-shell">
          <Navbar />
          <Hero />
          <About />
        </div>
      </div>
    </main>
  )
}

export default App
