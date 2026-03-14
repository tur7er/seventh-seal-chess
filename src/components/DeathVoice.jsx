import { useGameStore } from '../store/useGameStore'

const QUOTES = [
  '"I have been at your side for a long time."',
  '"Every move you make narrows the space of what you can become."',
  '"I know no mercy. Nor, in this moment, do you."',
  '"The pieces have no will. Only the hand that moves them."',
  '"You chose that square. What does the choice say about your soul?"',
  '"Even pawns have the potential for transformation. Remember that."',
  '"The bishop moves in diagonals. Some minds can only see straight ahead."',
  '"In chess, as in life, the king is precious and fragile. Protect what matters."',
  '"The rook is honest \u2014 it travels in straight lines. Be wary of those who do not."',
  '"A knight leaps. It does not explain itself. Some problems require leaping."',
  '"You have given up material for tempo. Time is the only market that matters."',
  '"Do you believe in God? Does it change how you play?"',
  '"Your opponent is not me. Your opponent is your own impatience."',
  '"The center of the board is the center of the world. Control it or be controlled."',
  '"That was a blunder. But blunders are how mortals learn. I never blunder."',
  '"An endgame approaches. Can you feel it?"',
  '"I have watched men play this game for centuries. The board does not change."',
  '"The queen is the most powerful piece because she is not afraid to sacrifice herself."',
  '"Check. Your king must answer. What will you do when the answer costs you?"',
  '"You are playing better. Do not let that comfort you."',
]

export function DeathVoice() {
  const deathQuoteIndex = useGameStore(state => state.deathQuoteIndex)
  const quote = QUOTES[deathQuoteIndex % QUOTES.length]

  return (
    <div style={{
      borderLeft: '2px solid var(--vermillion)',
      padding: '1rem 1.25rem',
      background: 'rgba(181, 40, 28, 0.04)',
      transition: 'opacity 0.3s ease',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.55rem',
        color: 'var(--vermillion)',
        textTransform: 'uppercase',
        letterSpacing: '0.3em',
        marginBottom: '0.5rem',
      }}>
        Death Speaks
      </div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontStyle: 'italic',
        fontSize: '0.95rem',
        color: 'var(--ink-500)',
        lineHeight: 1.9,
      }}>
        {quote}
      </div>
    </div>
  )
}
