function App() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <nav className="navbar" aria-label="Main navigation">
            <a className="navbar__brand" href="#home">
              Mahdi
            </a>

            <div className="navbar__links">
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero__content">
            <p className="hero__eyebrow">Software Developer</p>

            <h1 className="hero__title">Hi, I&apos;m Mahdi.</h1>

            <p className="hero__description">
              I build clean, modern, and practical web experiences.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View Projects
              </a>

              <a className="button button--secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">About</h2>
            <p className="section-text">
              This section will introduce who I am, what I do, and the technologies I work with.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-text">
              This section will showcase selected projects and the problems they solve.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="section-text">
              This section will make it easy for visitors to get in touch.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
