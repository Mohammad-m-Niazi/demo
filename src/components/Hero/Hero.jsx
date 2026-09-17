import './Hero.css'
import profileImage from '../../assets/profile.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">HELLO, I'M</p>

        <h1 className="hero-title">Mohammad Mahdi Niazi</h1>

        <h2 className="hero-role">Software Developer Engineer in Test</h2>

        <p className="hero-description">
          I build clean, modern, and user-friendly digital experiences with a focus on quality,
          performance, and thoughtful design.
        </p>

        <div className="hero-actions">
          <a className="hero-primary-btn" href="#work">
            View My Work
            <span>↗</span>
          </a>

          <a className="hero-secondary-btn" href="#contact">
            Contact Me
            <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-shape">
          <div className="hero-image-wrapper">
            <img className="hero-profile-image" src={profileImage} alt="Mahdi Niazi" />
          </div>
        </div>

        <div className="hero-floating-card hero-experience">
          <strong>8+</strong>
          <span>Years of Experience</span>
        </div>

        <div className="hero-floating-card hero-focus">
          <span>Development</span>
          <strong>Quality + Design</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
