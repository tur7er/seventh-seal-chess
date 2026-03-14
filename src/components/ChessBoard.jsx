import { useState, useEffect } from 'react'
import { Chessboard } from 'react-chessboard'
import { useGameStore } from '../store/useGameStore'

export function ChessBoard() {
  const { getPosition, executeMove, selectedSquare, possibleMoves, lastMove } = useGameStore()
  const [boardWidth, setBoardWidth] = useState(Math.min(480, window.innerWidth - 48))

  useEffect(() => {
    const handleResize = () => setBoardWidth(Math.min(480, window.innerWidth - 48))
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const customSquareStyles = {}
  possibleMoves.forEach(sq => {
    customSquareStyles[sq] = { background: 'rgba(181, 40, 28, 0.18)', borderRadius: '50%' }
  })
  if (selectedSquare) {
    customSquareStyles[selectedSquare] = { background: 'rgba(181, 40, 28, 0.25)' }
  }
  if (lastMove) {
    customSquareStyles[lastMove.from] = { background: 'rgba(158, 138, 94, 0.22)' }
    customSquareStyles[lastMove.to] = { background: 'rgba(158, 138, 94, 0.32)' }
  }

  function onDrop(sourceSquare, targetSquare) {
    return executeMove(sourceSquare, targetSquare)
  }

  return (
    <Chessboard
      position={getPosition()}
      onPieceDrop={onDrop}
      onSquareClick={(sq) => useGameStore.getState().selectSquare(sq)}
      customSquareStyles={customSquareStyles}
      customBoardStyle={{
        border: '1px solid var(--ash-200)',
        boxShadow: 'none',
      }}
      customLightSquareStyle={{ backgroundColor: 'var(--board-light)' }}
      customDarkSquareStyle={{ backgroundColor: 'var(--board-dark)' }}
      boardWidth={boardWidth}
    />
  )
}
