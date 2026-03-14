import { useEffect, useRef, useState } from 'react'
import { THEORY_NODES, COMPLEXITY_DATA } from '../data/theory'
import { TheoryNode } from '../components/TheoryNode'

export function Theory() {
  const barsRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (barsRef.current) observer.observe(barsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          Mathematical Foundations
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>Game Theory</h2>
        <p style={{ maxWidth: '560px', marginBottom: '3rem' }}>
          The mathematical bones beneath the board. From Von Neumann to Shannon, these theorems reveal why chess is both finite and unfathomable.
        </p>

        <div className="rule" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
        }}>
          {/* Left — Timeline */}
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: 'var(--ash-200)',
            }} />
            {THEORY_NODES.map((node) => (
              <div key={node.id} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '0.3rem',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--vermillion)',
                  transform: 'translateX(-3px)',
                }} />
                <TheoryNode node={node} />
              </div>
            ))}
          </div>

          {/* Right — Complexity */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: 'var(--gold-line)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '1rem',
            }}>
              Computational Complexity
            </div>
            <div ref={barsRef} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {COMPLEXITY_DATA.map((d, i) => (
                <div key={i}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.3rem',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      color: 'var(--ink-700)',
                    }}>
                      {d.name}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--ink-300)',
                    }}>
                      {d.games}
                    </span>
                  </div>
                  <div style={{
                    height: '4px',
                    background: 'var(--ash-100)',
                    border: '1px solid var(--ash-200)',
                  }}>
                    <div style={{
                      height: '100%',
                      width: visible ? `${d.pct}%` : '0%',
                      background: d.name === 'Chess' ? 'var(--vermillion)' : 'var(--ink-300)',
                      transition: `width 0.8s ease ${i * 0.15}s`,
                    }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '3rem',
              padding: '1.5rem',
              border: '1px solid var(--ash-200)',
            }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.55rem',
                color: 'var(--gold-line)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
              }}>
                Game Tree Statistics
              </div>
              {[
                { label: 'Average branching factor', value: '~35' },
                { label: 'Average game length', value: '~80 half-moves' },
                { label: 'Shannon Number', value: '10\u00B9\u00B2\u2070' },
                { label: 'Known positions (endgame tables)', value: '~3.5 \u00D7 10\u00B9\u00B3' },
              ].map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid var(--ash-100)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--ink-500)',
                  }}>
                    {s.label}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--ink-900)',
                  }}>
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
