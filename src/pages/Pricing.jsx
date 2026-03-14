import { Link } from 'react-router-dom'
import { TIERS, REVENUE_STREAMS } from '../data/pricing'
import { PricingTier } from '../components/PricingTier'

export function Pricing() {
  return (
    <div className="page">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          Choose Your Path
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>Pricing</h2>
        <p style={{ maxWidth: '560px', marginBottom: '3rem' }}>
          Begin as a mortal. Advance through the seals. Every tier unlocks deeper understanding of the game and its mathematical foundations.
        </p>

        <div className="rule" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          background: 'var(--ash-200)',
          marginBottom: '0',
        }}>
          {TIERS.map(tier => (
            <PricingTier key={tier.id} tier={tier} />
          ))}
        </div>

        <div className="rule" />

        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          Revenue Architecture
        </div>
        <h2 style={{ marginBottom: '2rem' }}>Four Revenue Streams</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          marginBottom: '0',
        }}>
          {REVENUE_STREAMS.map((stream, i) => (
            <div key={i} style={{
              padding: '1.5rem',
              borderTop: '1px solid var(--ash-200)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--gold-line)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '0.5rem',
              }}>
                {stream.label}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                color: 'var(--ink-900)',
                marginBottom: '0.5rem',
              }}>
                {stream.title}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--ink-500)',
                lineHeight: 1.8,
                marginBottom: '0.75rem',
              }}>
                {stream.desc}
              </p>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--vermillion)',
              }}>
                {stream.estimate}
              </div>
            </div>
          ))}
        </div>

        <div className="rule" />

        <div style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>The Game Awaits</h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/play" className="btn btn-primary">Start Playing</Link>
            <Link to="/learn" className="btn btn-ghost">Read the Curriculum</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
