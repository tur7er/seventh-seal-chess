import { Link } from 'react-router-dom'
import { ChessBoard } from '../components/ChessBoard'
import { DeathVoice } from '../components/DeathVoice'
import { useGameStore } from '../store/useGameStore'

export function Play() {
  const {
    moveHistory, resetGame, getTurn, getMoveNumber,
    capturedPieces, streak, isCheck, isCheckmate, isDraw,
  } = useGameStore()

  const turn = getTurn()
  const moveNum = getMoveNumber()
  const gameOver = isCheckmate() || isDraw()

  const movePairs = []
  for (let i = 0; i < moveHistory.length; i += 2) {
    movePairs.push({
      num: Math.floor(i / 2) + 1,
      white: moveHistory[i]?.san || '',
      black: moveHistory[i + 1]?.san || '',
    })
  }

  return (
    <div className="page">
      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — Board */}
          <div style={{ position: 'relative' }}>
            <ChessBoard />
            {gameOver && (
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(250, 250, 247, 0.9)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  marginBottom: '1rem',
                }}>
                  {isCheckmate() ? (turn === 'w' ? 'Black Wins' : 'White Wins') : 'Draw'}
                </h2>
                <button onClick={resetGame} className="btn btn-primary">
                  New Game
                </button>
              </div>
            )}
          </div>

          {/* Right — Panel */}
          <div style={{ minWidth: 0 }}>
            {/* Turn indicator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: turn === 'w' ? 'var(--ash-50)' : 'var(--ink-900)',
                border: '1px solid var(--ash-300)',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--ink-500)',
              }}>
                {turn === 'w' ? 'White to move' : 'Black to move'}
                {isCheck() && ' \u2014 Check'}
              </span>
            </div>

            {/* Stats row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              {[
                { label: 'Move', value: moveNum || '\u2014' },
                { label: 'Captured', value: capturedPieces.w.length + capturedPieces.b.length },
                { label: 'Streak', value: streak },
              ].map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '0.5rem',
                  border: '1px solid var(--ash-200)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 300,
                    color: 'var(--ink-900)',
                  }}>
                    {s.value}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    textTransform: 'uppercase',
                    color: 'var(--ink-300)',
                    letterSpacing: '0.15em',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Death Voice */}
            <div style={{ marginBottom: '1.5rem' }}>
              <DeathVoice />
            </div>

            {/* Move notation */}
            <div style={{
              maxHeight: '200px',
              overflowY: 'auto',
              marginBottom: '1.5rem',
              border: '1px solid var(--ash-200)',
              padding: '0.75rem',
            }}>
              {movePairs.length === 0 ? (
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--ink-300)',
                  textAlign: 'center',
                }}>
                  No moves yet
                </p>
              ) : (
                movePairs.map((pair) => (
                  <div key={pair.num} style={{
                    display: 'flex',
                    gap: '1rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--ink-700)',
                    padding: '0.15rem 0',
                    borderBottom: '1px solid var(--ash-100)',
                  }}>
                    <span style={{ color: 'var(--ink-300)', width: '2rem' }}>{pair.num}.</span>
                    <span style={{ width: '4rem' }}>{pair.white}</span>
                    <span style={{ width: '4rem' }}>{pair.black}</span>
                  </div>
                ))
              )}
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button onClick={resetGame} className="btn btn-ghost">New Game</button>
              <Link to="/learn" className="btn btn-ghost">Study Openings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
