import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="about-eyebrow">ABOUT ME</p>

        <h2>
          Building reliable digital
          <span> experiences.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-story">
          <p>
            I'm a software professional focused on building and testing modern applications with
            clean, maintainable, and reliable solutions.
          </p>

          <p>
            My experience combines software development, automation, API testing, and quality
            engineering. I enjoy solving technical problems and creating experiences that work
            smoothly for users.
          </p>

          <a className="about-link" href="#contact">
            More About Me
            <span>→</span>
          </a>
        </div>

        <div className="about-stats">
          <div className="about-stat">
            <strong>8+</strong>
            <span>Years Experience</span>
          </div>

          <div className="about-stat">
            <strong>UI</strong>
            <span>Web Development</span>
          </div>

          <div className="about-stat">
            <strong>QA</strong>
            <span>Quality Engineering</span>
          </div>

          <div className="about-stat">
            <strong>API</strong>
            <span>Automation & Testing</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
