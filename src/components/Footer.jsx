import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--ash-200)',
      padding: '3rem var(--page-px)',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '1.2rem',
        color: 'var(--ink-900)',
        marginBottom: '0.75rem',
      }}>
        MEMENTO MORI
      </div>
      <p style={{
        fontStyle: 'italic',
        color: 'var(--ink-300)',
        fontSize: '0.9rem',
        marginBottom: '1.5rem',
      }}>
        "When you have finished your game, the King and Pawn go into the same box."
      </p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '1.5rem',
      }}>
        <Link to="/" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-300)' }}>Home</Link>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-300)' }}>GitHub</a>
        <Link to="/pricing" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--ink-300)' }}>Pricing</Link>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.55rem',
        color: 'var(--ink-300)',
        letterSpacing: '0.1em',
      }}>
        &copy; {new Date().getFullYear()} MEMENTO MORI. THE GAME CONTINUES.
      </div>
    </footer>
  )
}
