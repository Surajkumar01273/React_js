import React from 'react'
import Template from '../components/Template'
import formPic from "../assets/formPic.jpeg"

const Login = ({setIsLogedIn}) => {
  return (
    <div className=''>
      <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond"
      desc2="Education to future-proof year career."
      image={formPic}
      formtype="login"
      setIsLogedIn={setIsLogedIn}
       />
    </div>
  )
}

export default Login
