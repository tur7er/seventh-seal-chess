export function DeployStep({ step }) {
  return (
    <div style={{ padding: '2rem 0' }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1.2rem',
        color: 'var(--ash-300)',
        marginBottom: '0.5rem',
      }}>
        {step.num}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1rem',
        color: 'var(--ink-900)',
        marginBottom: '0.5rem',
      }}>
        {step.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.88rem',
        color: 'var(--ink-500)',
        marginBottom: step.code ? '1rem' : 0,
      }}>
        {step.desc}
      </p>
      {step.code && (
        <pre style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: 'var(--ink-700)',
          background: 'var(--ash-100)',
          border: '1px solid var(--ash-200)',
          padding: '0.9rem 1.2rem',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}>
          {step.code}
        </pre>
      )}
    </div>
  )
}
