import { useState, React } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import DashBord from './pages/DashBord';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);
  
  


  return (
    <>
      <div className='w-screen h-screen bg-slate-950'>
        <NavBar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn} />} />
          <Route path="/signup" element={<SignUp setIsLogedIn={setIsLogedIn }/>} />
          <Route path="/dashbord" element={<DashBord />} />
        </Routes>

      </div>
    </>
  )
}

export default App
