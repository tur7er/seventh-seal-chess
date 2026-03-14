import { create } from 'zustand'
import { Chess } from 'chess.js'

export const useGameStore = create((set, get) => ({
  game: new Chess(),
  moveHistory: [],
  selectedSquare: null,
  possibleMoves: [],
  lastMove: null,
  capturedPieces: { w: [], b: [] },
  streak: 3,
  deathQuoteIndex: 0,

  getPosition: () => get().game.fen(),

  selectSquare: (square) => {
    const { game, selectedSquare } = get()
    const moves = game.moves({ square, verbose: true })

    if (selectedSquare && moves.length === 0) {
      const pendingMoves = game.moves({ square: selectedSquare, verbose: true })
      const validMove = pendingMoves.find(m => m.to === square)
      if (validMove) {
        get().executeMove(selectedSquare, square)
        return
      }
    }

    if (moves.length > 0) {
      set({ selectedSquare: square, possibleMoves: moves.map(m => m.to) })
    } else {
      set({ selectedSquare: null, possibleMoves: [] })
    }
  },

  executeMove: (from, to) => {
    const { game } = get()
    try {
      const move = game.move({ from, to, promotion: 'q' })
      if (!move) return false
      set(state => ({
        moveHistory: [...state.moveHistory, move],
        lastMove: { from: move.from, to: move.to },
        selectedSquare: null,
        possibleMoves: [],
        deathQuoteIndex: state.deathQuoteIndex + 1,
        capturedPieces: move.captured
          ? {
              ...state.capturedPieces,
              [move.color === 'w' ? 'w' : 'b']: [
                ...state.capturedPieces[move.color === 'w' ? 'w' : 'b'],
                move.captured
              ]
            }
          : state.capturedPieces,
      }))
      return true
    } catch { return false }
  },

  resetGame: () => set({
    game: new Chess(),
    moveHistory: [],
    selectedSquare: null,
    possibleMoves: [],
    lastMove: null,
    capturedPieces: { w: [], b: [] },
    deathQuoteIndex: 0,
  }),

  isCheck: () => get().game.isCheck(),
  isCheckmate: () => get().game.isCheckmate(),
  isDraw: () => get().game.isDraw(),
  getTurn: () => get().game.turn(),
  getMoveNumber: () => Math.ceil(get().moveHistory.length / 2),
}))
