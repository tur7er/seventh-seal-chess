import { DEPLOY_STEPS } from '../data/deploySteps'
import { DeployStep } from '../components/DeployStep'

export function Deploy() {
  return (
    <div className="page">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          Ship It
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>Deploy to GitHub Pages</h2>
        <p style={{ maxWidth: '560px', marginBottom: '3rem' }}>
          Eight steps from code to live URL. This is how your product reaches the internet.
        </p>

        <div className="rule" />

        {DEPLOY_STEPS.map((step, i) => (
          <div key={step.num}>
            <DeployStep step={step} />
            {i < DEPLOY_STEPS.length - 1 && (
              <div style={{ width: '100%', height: '1px', background: 'var(--ash-200)' }} />
            )}
          </div>
        ))}

        <div className="rule" />

        <div style={{
          background: 'var(--ash-100)',
          border: '1px solid var(--ash-200)',
          padding: '2rem',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            color: 'var(--gold-line)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '0.75rem',
          }}>
            Your Live URL
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--ink-700)',
          }}>
            https://YOUR_USERNAME.github.io/memento-mori/
          </div>
        </div>
      </div>
    </div>
  )
}
