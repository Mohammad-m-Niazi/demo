import './Skills.css'

import { FaJava, FaReact, FaGitAlt, FaJenkins, FaCode } from 'react-icons/fa'

import { SiJavascript, SiTypescript, SiSelenium, SiPostman, SiMysql } from 'react-icons/si'

function Skills() {
  const skills = [
    {
      name: 'Java',
      category: 'Programming',
      icon: FaJava,
    },
    {
      name: 'JavaScript',
      category: 'Programming',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      category: 'Programming',
      icon: SiTypescript,
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: FaReact,
    },
    {
      name: 'Playwright',
      category: 'Automation',
      icon: FaCode,
    },
    {
      name: 'Selenium',
      category: 'Automation',
      icon: SiSelenium,
    },
    {
      name: 'TestNG',
      category: 'Testing',
      icon: FaJava,
    },
    {
      name: 'REST Assured',
      category: 'API Testing',
      icon: FaJava,
    },
    {
      name: 'Postman',
      category: 'API Testing',
      icon: SiPostman,
    },
    {
      name: 'SQL',
      category: 'Database',
      icon: SiMysql,
    },
    {
      name: 'Jenkins',
      category: 'CI/CD',
      icon: FaJenkins,
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control',
      icon: FaGitAlt,
    },
  ]

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p className="skills-eyebrow">TOOLS & SKILLS</p>

        <h2>
          Technologies <span>I Use.</span>
        </h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => {
          const Icon = skill.icon

          return (
            <article className="skill-card" key={skill.name}>
              <div className="skill-icon">
                <Icon />
              </div>

              <div className="skill-info">
                <strong>{skill.name}</strong>
                <span>{skill.category}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Skills
