export function PricingTier({ tier }) {
  return (
    <div style={{
      padding: '2rem 1.5rem',
      borderTop: `2px solid ${tier.featured ? 'var(--vermillion)' : 'var(--ash-200)'}`,
      background: 'var(--ash-50)',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        color: 'var(--ink-900)',
        marginBottom: '0.25rem',
      }}>
        {tier.name}
      </h3>
      <p style={{
        fontStyle: 'italic',
        fontSize: '0.82rem',
        color: 'var(--ink-300)',
        marginBottom: '1.25rem',
      }}>
        {tier.tagline}
      </p>
      <div style={{ marginBottom: '1.5rem' }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '2.2rem',
          fontWeight: 300,
          color: 'var(--ink-900)',
        }}>
          {tier.price}
        </span>
        {tier.period && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            color: 'var(--ink-300)',
          }}>
            {tier.period}
          </span>
        )}
      </div>
      <ul style={{ listStyle: 'none', marginBottom: '1.5rem', flex: 1 }}>
        {tier.features.map((f, i) => (
          <li key={i} style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: f.included ? 'var(--ink-500)' : 'var(--ash-300)',
            marginBottom: '0.5rem',
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'baseline',
          }}>
            <span style={{ color: f.included ? 'var(--gold-line)' : 'var(--ash-300)' }}>
              {f.included ? '\u2726' : '\u2014'}
            </span>
            {f.text}
          </li>
        ))}
      </ul>
      <button className={`btn btn-${tier.btnStyle}`} style={{ width: '100%' }}>
        {tier.btnLabel}
      </button>
    </div>
  )
}
