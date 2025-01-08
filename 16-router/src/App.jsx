import { useState } from 'react'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Labs from './components/Labs';
import { NavLink } from 'react-router-dom';

import './App.css'
import MainHader from './components/MainHader';

function App() {

  return (
    <>
      <div>

        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </nav>



        <Routes>
          <Route path="/" element={<MainHader />}>

            {/* Default Route */}
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />``
            <Route path="/labs" element={<Labs />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
