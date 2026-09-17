import './Services.css'

function Services() {
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'Building responsive, modern, and user-friendly web applications with a focus on clean code, performance, and maintainability.',
      skills: ['React', 'JavaScript', 'Responsive Design'],
    },
    {
      number: '02',
      title: 'Test Automation',
      description:
        'Creating scalable automation solutions for UI, regression, and end-to-end testing to improve software quality and delivery speed.',
      skills: ['Playwright', 'Selenium', 'TestNG'],
    },
    {
      number: '03',
      title: 'API & Quality Engineering',
      description:
        'Testing APIs, integrations, and application workflows to help deliver reliable and high-quality software.',
      skills: ['REST Assured', 'Postman', 'API Testing'],
    },
  ]

  return (
    <section className="services" id="services">
      <div className="services-heading">
        <p className="services-eyebrow">WHAT I DO</p>

        <h2>
          Services built around
          <span> quality.</span>
        </h2>

        <p className="services-description">
          From development to automated testing, I focus on building reliable digital experiences
          from both the developer and quality engineering perspective.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-number">{service.number}</div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-skills">
                {service.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>

            <a className="service-link" href="#contact">
              Let's Talk
              <span>↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
