import { useState } from 'react'

export function ChapterCard({ chapter }) {
  const [hovered, setHovered] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          padding: '2rem 1.5rem',
          background: 'var(--ash-50)',
          borderTop: `2px solid ${hovered ? 'var(--vermillion)' : 'var(--ash-200)'}`,
          cursor: 'pointer',
          transition: 'border-color 0.2s',
        }}
      >
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.5rem',
          fontWeight: 300,
          color: hovered ? 'var(--ash-300)' : 'var(--ash-200)',
          lineHeight: 1,
          marginBottom: '0.75rem',
          transition: 'color 0.2s',
        }}>
          {chapter.numeral}
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.55rem',
          color: 'var(--vermillion)',
          textTransform: 'uppercase',
          letterSpacing: '0.3em',
          marginBottom: '0.5rem',
        }}>
          {chapter.seal}
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          fontWeight: 600,
          color: 'var(--ink-900)',
          marginBottom: '0.5rem',
        }}>
          {chapter.title}
        </h3>
        <p style={{
          fontStyle: 'italic',
          fontSize: '0.88rem',
          color: 'var(--ink-500)',
          lineHeight: 1.8,
          marginBottom: '1rem',
        }}>
          {chapter.description}
        </p>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.5rem',
          color: 'var(--ink-300)',
          textTransform: 'uppercase',
        }}>
          {chapter.tags.join(' \u00B7 ')}
        </div>
        {!chapter.free && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.5rem',
            color: 'var(--vermillion)',
            textTransform: 'uppercase',
            marginTop: '0.75rem',
            letterSpacing: '0.15em',
          }}>
            Seeker +
          </div>
        )}
      </div>

      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(18, 16, 14, 0.6)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--ash-50)',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '3rem',
              border: '1px solid var(--ash-200)',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: 'var(--vermillion)',
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              marginBottom: '0.5rem',
            }}>
              {chapter.seal}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              marginBottom: '0.5rem',
            }}>
              {chapter.lessonTitle}
            </h2>
            <p style={{
              fontStyle: 'italic',
              fontSize: '0.9rem',
              color: 'var(--ink-300)',
              marginBottom: '2rem',
            }}>
              {chapter.quote}
            </p>
            {chapter.lessonBody ? (
              chapter.lessonBody.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.85,
                  color: 'var(--ink-500)',
                  marginBottom: '1.25rem',
                }}>
                  {para}
                </p>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <p style={{ color: 'var(--ink-300)', fontStyle: 'italic', marginBottom: '1rem' }}>
                  This chapter is available with a Seeker subscription.
                </p>
                <a href="/seventh-seal-chess/pricing" className="btn btn-blood" style={{ textDecoration: 'none' }}>
                  Upgrade to Seeker
                </a>
              </div>
            )}
            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
              <button
                onClick={() => setModalOpen(false)}
                className="btn btn-ghost"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
