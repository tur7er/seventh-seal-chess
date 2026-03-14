import { CHAPTERS } from '../data/chapters'
import { ChapterCard } from '../components/ChapterCard'

export function Learn() {
  return (
    <div className="page">
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>
          The Curriculum
        </div>
        <h2 style={{ marginBottom: '0.75rem' }}>The Seven Seals</h2>
        <p style={{ maxWidth: '560px', marginBottom: '3rem' }}>
          Seven stages of chess mastery, structured as a pilgrimage from the opening move to the final endgame. Each seal reveals a deeper truth about the board and the player.
        </p>

        <div className="rule" />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1px',
          background: 'var(--ash-200)',
        }}>
          {CHAPTERS.map(ch => (
            <ChapterCard key={ch.id} chapter={ch} />
          ))}
        </div>
      </div>
    </div>
  )
}
