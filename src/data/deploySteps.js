export const DEPLOY_STEPS = [
  {
    num: '01',
    title: 'Create a GitHub account',
    desc: "Go to github.com and sign up. Your username becomes part of your live URL \u2014 choose it deliberately. This is your name on the internet.",
    code: null,
  },
  {
    num: '02',
    title: 'Install Node.js (if needed)',
    desc: 'Download the LTS version from nodejs.org. This gives you npm, the package manager that powers everything here.',
    code: 'node --version\nnpm --version\n# Both should print a version number. Node must be 18+.',
  },
  {
    num: '03',
    title: 'Clone and install the project',
    desc: 'The codebase is already on GitHub after Claude Code built it. Clone it locally, install dependencies.',
    code: 'git clone https://github.com/YOUR_USERNAME/memento-mori.git\ncd memento-mori\nnpm install',
  },
  {
    num: '04',
    title: 'Run it locally first',
    desc: 'Always verify it works on your machine before pushing. The dev server runs at localhost:5173.',
    code: 'npm run dev\n# Open http://localhost:5173 in your browser',
  },
  {
    num: '05',
    title: 'Configure GitHub Pages in the repo',
    desc: 'Go to your GitHub repo \u2192 Settings \u2192 Pages \u2192 Source: "GitHub Actions." This enables automatic deployment.',
    code: null,
  },
  {
    num: '06',
    title: 'Deploy to production',
    desc: 'One command. gh-pages builds the project and pushes the dist/ folder to the gh-pages branch, which GitHub Pages serves.',
    code: 'npm run deploy\n# Wait ~2 minutes\n# Then visit: https://YOUR_USERNAME.github.io/memento-mori/',
  },
  {
    num: '07',
    title: 'Set up auto-deploy on push (optional)',
    desc: 'Create a GitHub Actions workflow so every git push deploys automatically. Create this file in your repo:',
    code: '# .github/workflows/deploy.yml\nname: Deploy to GitHub Pages\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: npm install\n      - run: npm run build\n      - uses: peaceiris/actions-gh-pages@v4\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist',
  },
  {
    num: '08',
    title: 'Your site is live',
    desc: 'Share this URL. Every push to main now redeploys automatically. This is your product on the internet.',
    code: 'https://YOUR_USERNAME.github.io/memento-mori/',
  },
]
