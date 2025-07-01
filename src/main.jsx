import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import Navbar from './components/navbar'
import Home from './pages/app'
import About from './pages/about'
import Updates from './pages/updates'
import Projects from './pages/projects'
import Services from './pages/services'
import Contacts from './pages/contacts'
import Cursor from './components/cursor'

function App() {
  const location = useLocation()

  return (
    <>
      <Navbar />
      <Cursor />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
