import './Process.css'
const steps = [
  {
    title: 'Understand',
    detail: 'Requirements & goals',
    description: 'Listen first, clarify the problem, and define what success looks like.',
  },
  {
    title: 'Plan',
    detail: 'Architecture & test strategy',
    description: 'Map the solution and plan quality checks before development begins.',
  },
  {
    title: 'Build & Test',
    detail: 'Development + automation',
    description: 'Build in small iterations, with testing and automation along the way.',
  },
  {
    title: 'Deliver',
    detail: 'Validate, optimize & release',
    description: 'Check the complete experience, refine performance, and prepare for release.',
  },
]
function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process-heading">
        <p className="process-eyebrow">HOW I WORK</p>
        <h2 id="process-title">
          A thoughtful process.
          <br />
          <span>Reliable results.</span>
        </h2>
        <p>From the first conversation to the final release, quality is part of every step.</p>
      </div>
      <ol className="process-steps">
        {steps.map((step, index) => (
          <li className="process-step" key={step.title}>
            <span className="process-number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{step.title}</h3>
            <p className="process-detail">{step.detail}</p>
            <p className="process-description">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
export default Process
