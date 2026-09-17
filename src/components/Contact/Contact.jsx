import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import './Contact.css'
// TODO: Replace these empty values with your real email and LinkedIn profile URL.
const email = ''
const linkedinUrl = ''
// Account identified by this repository's origin URL.
const githubUrl = 'https://github.com/Mohammad-m-Niazi'
function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="contact-eyebrow">LET'S CONNECT</p>
        <h2 id="contact-title">
          Let's build something <span>great together.</span>
        </h2>
        <p className="contact-description">
          Have a project in mind? Let's talk about building a thoughtful digital experience,
          strengthening your test automation, or bringing more confidence to your next release.
        </p>
        <a
          className="contact-cta"
          href={email ? `mailto:${email}` : githubUrl}
          {...(!email && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {email ? 'Start a conversation' : 'Connect on GitHub'}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="contact-details">
        <p className="contact-details-label">KEEP IN TOUCH</p>
        <div className="contact-method">
          <FaEnvelope aria-hidden="true" />
          <div>
            <h3>Email</h3>
            {email ? (
              <a href={`mailto:${email}`}>{email}</a>
            ) : (
              <span className="contact-placeholder">TODO: Add your email address</span>
            )}
          </div>
        </div>
        <div className="contact-method">
          <FaGithub aria-hidden="true" />
          <div>
            <h3>GitHub</h3>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              Mohammad-m-Niazi <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="contact-method">
          <FaLinkedinIn aria-hidden="true" />
          <div>
            <h3>LinkedIn</h3>
            {linkedinUrl ? (
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                View my profile <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <span className="contact-placeholder">TODO: Add your LinkedIn URL</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
