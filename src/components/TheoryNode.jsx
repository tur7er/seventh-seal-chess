export function TheoryNode({ node }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.55rem',
        color: 'var(--gold-line)',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        marginBottom: '0.3rem',
      }}>
        {node.epoch}
      </div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        color: 'var(--ink-900)',
        marginBottom: '0.75rem',
      }}>
        {node.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'var(--ink-500)',
        lineHeight: 1.85,
        marginBottom: '1rem',
      }}>
        {node.body}
      </p>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        color: 'var(--vermillion)',
        background: 'rgba(181, 40, 28, 0.05)',
        padding: '0.6rem 1rem',
        borderLeft: '1px solid var(--vermillion-dim)',
      }}>
        {node.formula}
      </div>
    </div>
  )
}
