import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import NotFound from './components/NotFound'
import Labs from './components/Labs'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
