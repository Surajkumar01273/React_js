import { useState, React } from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import DashBord from './pages/DashBord';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {

  const [isLogedIn, setIsLogedIn] = useState(false);




  return (
    <>
      <div className='app w-screen h-[800px]'>
        <NavBar isLogedIn={isLogedIn} setIsLogedIn={setIsLogedIn} />


        <Routes>
          <Route path="/" element={<Home isLogedIn={isLogedIn} />} />
          <Route path="/login" element={<Login setIsLogedIn={setIsLogedIn} />} />
          <Route path="/signup" element={<SignUp setIsLogedIn={setIsLogedIn} />} />
          <Route path="/dashbord" element={
            <PrivateRoute isLogedIn={isLogedIn}>
              <DashBord />
            </PrivateRoute>
          } />
        </Routes>

      </div>
    </>
  )
}

export default App
