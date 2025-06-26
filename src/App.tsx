import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/home'
import {About} from './pages/about/about'
import { Music } from './pages/music/music'
import { Projects } from './pages/projects/projects'

function App() {
  

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/music" element={<Music />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
