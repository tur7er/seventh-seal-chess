import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Play } from './pages/Play'
import { Learn } from './pages/Learn'
import { Theory } from './pages/Theory'
import { Pricing } from './pages/Pricing'
import { Deploy } from './pages/Deploy'

export default function App() {
  return (
    <BrowserRouter basename="/memento-mori">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/deploy" element={<Deploy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
