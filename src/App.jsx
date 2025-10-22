// filepath: /Users/swadhinupadhyay/Documents/SVPCET/Clg-website/src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Magazines from './components/Magazines'
import Events from './components/Events'
import Contactus from './components/Contactus'

const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden bg-zinc-200 flex flex-col items-center'>
        <Navbar />
        <main className="pt-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archives" element={<Magazines />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
