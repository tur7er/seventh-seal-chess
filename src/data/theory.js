export const THEORY_NODES = [
  {
    id: 1,
    epoch: 'Axiom Zero',
    title: 'What Is a Game?',
    body: 'A game is a set of players, a set of actions available to each, and a payoff function mapping action profiles to outcomes. Chess has two players, a well-defined action set at each state, and a terminal payoff: win, draw, or lose. From this modest skeleton, an entire mathematical universe grows. Von Neumann formalized this in 1928. Bergman understood it intuitively in 1957. The knight understood it on the beach.',
    formula: 'G = (N, A, u)  where  N = {1,2},  A = legal moves,  u = {win, draw, lose}',
  },
  {
    id: 2,
    epoch: 'Theorem I',
    title: 'Zero-Sum Games',
    body: "Chess is zero-sum: every point gained by White is a point lost by Black. No trade is mutually beneficial. No diplomacy is possible. No cooperative equilibrium exists. Every game of chess is a pure conflict of interest — which is why it is such an honest mirror. The board does not lie about what you value.",
    formula: 'u\u2081(a) + u\u2082(a) = 0  for all action profiles a \u2208 A',
  },
  {
    id: 3,
    epoch: 'Theorem II',
    title: 'The Minimax Theorem',
    body: "Von Neumann's theorem (1928): in every finite, two-player, zero-sum game with perfect information, there exists an optimal strategy. The optimal strategy minimizes your maximum possible loss. Chess is finite — it ends. Therefore, perfect play exists. We simply cannot compute it. The Shannon Number explains why.",
    formula: 'max_x min_y v(x,y)  =  min_y max_x v(x,y)',
  },
  {
    id: 4,
    epoch: 'Theorem III',
    title: 'Alpha-Beta Pruning',
    body: "You do not need to evaluate every branch of the game tree. If you have found a move that proves your opponent's last choice was a mistake, you need not analyze their remaining alternatives — they would never play those branches. Alpha stores the maximizer's best guaranteed outcome. Beta stores the minimizer's. When they cross, you prune. This is how Stockfish beats you: not by seeing everything, but by knowing what to ignore.",
    formula: 'if \u03B2 \u2264 \u03B1: break  (cutoff \u2014 this branch cannot improve the outcome)',
  },
  {
    id: 5,
    epoch: 'Theorem IV',
    title: 'Sprague-Grundy Theory',
    body: "Every impartial combinatorial game is equivalent to a single number — its Grundy value. Games add: you can analyze two simultaneous games by XOR-ing their Grundy values. Chess is not impartial (each side has different pieces), but the structural insight is fundamental: games have computable, combinable values. The board is mathematics wearing a disguise.",
    formula: 'G(position) = mex{ G(successor) : successor \u2208 moves(position) }',
  },
  {
    id: 6,
    epoch: 'The Abyss',
    title: 'The Shannon Number',
    body: "Claude Shannon estimated in 1950 that chess has approximately 10^120 possible games. The observable universe contains roughly 10^80 atoms. There is no computer that will ever solve chess by exhaustive search. The game is finite, but practically infinite. This is the honest answer to every person who says 'just calculate everything.' You cannot. You must develop intuition. That is what the seven seals are for.",
    formula: '10\u00B9\u00B2\u2070 possible games  >>  10\u2078\u2070 atoms in the observable universe',
  },
]

export const COMPLEXITY_DATA = [
  { name: 'Tic-Tac-Toe', games: '255,168', pct: 1 },
  { name: 'Connect Four', games: '4.5 \u00D7 10\u00B9\u00B2', pct: 8 },
  { name: 'Checkers', games: '5 \u00D7 10\u00B2\u2070', pct: 22 },
  { name: 'Chess', games: '10\u00B9\u00B2\u2070', pct: 65 },
  { name: 'Go', games: '10\u00B3\u2076\u2070', pct: 100 },
]
