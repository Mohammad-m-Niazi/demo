import './App.css'
import backgroundImage from './assets/background_img.png'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <main className="portfolio" style={{ '--portfolio-background': `url(${backgroundImage})` }}>
      <div className="portfolio-container">
        <div className="page-shell">
          <Navbar />
          <Hero />
        </div>
      </div>
    </main>
  )
}

export default App
