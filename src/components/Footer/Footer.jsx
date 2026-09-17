import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <strong>Mahdi Niazi</strong>
          <span>Software Developer</span>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mahdi Niazi. All rights reserved.</p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  )
}
export default Footer
