import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="page">
      {/* Zone 1 — Hero */}
      <section className="container" style={{
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <div className="eyebrow" style={{ marginBottom: '2rem' }}>
          Est. Anno Domini MCMLVII — Ingmar Bergman, 1957
        </div>
        <h1 style={{ marginBottom: '1.5rem' }}>
          MEMENTO<br />MORI
        </h1>
        <p style={{
          fontStyle: 'italic',
          color: 'var(--ink-300)',
          fontSize: '1.1rem',
          marginBottom: '2.5rem',
          maxWidth: '480px',
        }}>
          Seventeen moves. An eternity to think. A lifetime to learn.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/play" className="btn btn-primary">Make Your First Move</Link>
          <Link to="/learn" className="btn btn-ghost">The Seven Seals</Link>
        </div>
      </section>

      <div className="rule" />

      {/* Zone 2 — Features */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
        }}>
          {[
            { glyph: '\u265F', title: 'Play Against Death', body: 'A chess engine wrapped in medieval philosophy. Every move is a meditation.' },
            { glyph: 'VII', title: 'Seven Seals Curriculum', body: 'From openings to endgames, structured as a pilgrimage through the seven seals of understanding.' },
            { glyph: '\u221E', title: 'Game Theory Deep Dive', body: 'Von Neumann, Nash, Shannon \u2014 the mathematical foundations behind every move on every board.' },
            { glyph: '\u2726', title: 'Criterion Aesthetic', body: 'No dark gothic clich\u00E9s. Clean typography, generous whitespace, ink on pale paper.' },
          ].map((f, i) => (
            <div key={i}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem',
                color: 'var(--ash-300)',
                marginBottom: '0.75rem',
              }}>
                {f.glyph}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--ink-900)',
                marginBottom: '0.5rem',
              }}>
                {f.title}
              </h3>
              <p style={{
                fontStyle: 'italic',
                fontSize: '0.85rem',
                color: 'var(--ink-500)',
                lineHeight: 1.8,
              }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />

      {/* Zone 3 — Editorial */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
        }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '1.6rem',
              color: 'var(--ink-900)',
              lineHeight: 1.4,
            }}>
              "The knight plays chess with Death. Not to win \u2014 no one wins against Death \u2014 but to delay. To think. To understand what the game means before the game ends."
            </p>
          </div>
          <div>
            <p style={{ marginBottom: '1.25rem' }}>
              Memento Mori is a chess learning platform built around the premise that chess is not merely a game of calculation, but a mirror for how you think under pressure. The curriculum is structured around seven seals \u2014 each one a stage of mastery, from the philosophy of the first move to the truth of the endgame.
            </p>
            <p>
              The game theory track goes deeper: zero-sum strategy, minimax optimization, alpha-beta pruning, and the Shannon Number. These are the mathematical bones beneath the board. Understanding them changes how you see every position.
            </p>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Zone 4 — Stats */}
      <section className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          textAlign: 'center',
          gap: '2rem',
        }}>
          {[
            { num: '10\u00B9\u00B2\u2070', label: 'possible games' },
            { num: '7', label: 'chapters to master' },
            { num: '\u221E', label: 'ways to lose' },
          ].map((s, i) => (
            <div key={i} style={{
              borderLeft: i > 0 ? '1px solid var(--ash-200)' : 'none',
              paddingLeft: i > 0 ? '2rem' : 0,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '3rem',
                fontWeight: 300,
                color: 'var(--ink-900)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}>
                {s.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                textTransform: 'uppercase',
                color: 'var(--ink-300)',
                letterSpacing: '0.15em',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rule" />
    </div>
  )
}
