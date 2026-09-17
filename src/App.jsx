import './App.css'
import backgroundImage from './assets/background_img.png'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="portfolio" style={{ '--portfolio-background': `url(${backgroundImage})` }}>
      <div className="portfolio-container">
        <div className="page-shell">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Process />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
