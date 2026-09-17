import './Projects.css'

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'MK Italian Cuisine',
      category: 'Web Development',
      description:
        'A restaurant website designed to provide a clean and user-friendly experience for customers exploring menu and restaurant information.',
      technologies: ['Web Development', 'Responsive Design', 'UI/UX'],
      liveUrl: 'https://mkitaliancuisine.mahdtech.net',
    },
    {
      number: '02',
      title: 'Football',
      category: 'Web Application',
      description:
        'A football-focused web project built to organize and present sports-related content through a clean and accessible interface.',
      technologies: ['Web Development', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://football.mahdtech.net',
    },
    {
      number: '03',
      title: 'Database Application',
      category: 'Full-Stack Development',
      description:
        'A database-focused web application demonstrating data management and application development concepts.',
      technologies: ['Database', 'Backend', 'Web Development'],
      liveUrl: 'https://database.mahdtech.net',
    },
  ]
  return (
    <section className="projects" id="work">
      <div className="projects-heading">
        <div>
          <p className="projects-eyebrow">SELECTED WORK</p>

          <h2>
            Projects built with
            <span> purpose.</span>
          </h2>
        </div>

        <p className="projects-intro">
          A selection of development and quality engineering work focused on creating reliable and
          user-friendly applications.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <a
              className="project-link"
              aria-label={`View ${project.title} live demo (opens in a new tab)`}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
