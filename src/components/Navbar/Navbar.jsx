import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <div className="navbar-logo">MN</div>

        <div className="navbar-name">
          <strong>Mohammad Mahdi Niazi</strong>
          <span>Software Developer Engineer in Test</span>
        </div>
      </div>

      <nav className="navbar-links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="navbar-contact" href="#contact">
        Let's Talk
        <span>↗</span>
      </a>
    </header>
  )
}

export default Navbar
