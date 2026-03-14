import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/play', label: 'Play' },
  { to: '/learn', label: 'The Seven Seals' },
  { to: '/theory', label: 'Game Theory' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/deploy', label: 'Deploy' },
]

export function Nav() {
  const { pathname } = useLocation()

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--nav-h)',
      background: 'rgba(250, 250, 247, 0.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--ash-200)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--page-px)',
    }}>
      <Link to="/" style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: '1.1rem',
        color: 'var(--ink-900)',
        textDecoration: 'none',
        letterSpacing: '0.05em',
      }}>
        MEMENTO MORI
      </Link>

      <div style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
      }}>
        {LINKS.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: pathname === link.to ? 'var(--ink-900)' : 'var(--ink-300)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/pricing" className="btn btn-blood" style={{ textDecoration: 'none' }}>
        Begin Your Game
      </Link>
    </nav>
  )
}
