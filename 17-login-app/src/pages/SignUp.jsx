import React from 'react';
import formPic from "../assets/formPic.jpeg";
import Template from '../components/Template';

const SignUp = ({setIsLogedIn}) => {
  // console.log(setIsLogedIn);
  
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Join the millions learning to code with StudyNotation for free"
        desc2="Build skills for today tommorow and beyyond.Education to future-proof your career."
        image={formPic}
        formtype="signup"
        setIsLogedIn={setIsLogedIn}
      />
    </div>
  )
}

export default SignUp
