import react from 'react'
import { useState } from "react";
import Data from './component/Data'

function App() {


  // const [firstName, setFirstname] = useState("");
  // const [lastName, setLastname] = useState("");

  // function firstinputHandler(event){
  //   setFirstname(event.target.value)
  //   // console.log("first name");
  //   // console.log(event.target.value); 
  // }

  // function lastinputHandler(event){
  //   setLastname(event.target.value)
  //   // console.log("last name");
  //   // console.log(event.target.value);  
  // }

  const [formData, setFormdata] = useState({data: "User Details", firstName: "", lastName: "", email: "", password: "", comments: "", isVisible: true, mode: "", center: "" });

  const [userdetals, setuserDetals] = useState("")


  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormdata(prevformData => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    setuserDetals(formData)
    console.log(formData);
    
  }



  return (
    <>
      <div className="">
        <form onSubmit={submitHandler} className="ml-[45%] mt-6 flex flex-col w-44 text-black">
        <h1 className='mt-6 text-lg mb-4 font-bold'>Book your Exam Slot</h1>

          <input
            className="border-2 border-black mb-4 p-1"
            type="text"
            value={formData.firstName}
            name='firstName'
            placeholder="first name"
            onChange={changeHandler} />

          <input
            className="border-2 border-black p-1"
            type="text"
            name='lastName'
            value={formData.lastName}
            placeholder="Last name"
            onChange={changeHandler} />

          <input
            type="email"
            placeholder='Enter Email'
            value={formData.email}
            name='email'
            onChange={changeHandler}
            className="border-2 p-1 mt-4 border-black" />

          <input
            type="password"
             autoComplete={formData.password}
            placeholder='Enter Password'
            value={formData.password}
            name='password'
            onChange={changeHandler}
            className='border-2 border-black p-1 mt-4' />

          <textarea
            name="comments"
            value={formData.comments}
            placeholder="Write Message"
            onChange={changeHandler}
            className='border-2 p-1 border-black mt-4'>
          </textarea>

          <div className='flex items-center mt-4'>
            <input
              type="checkbox"
              name='isVisible'
              id='isVisible'
              checked={formData.isVisible}
              onChange={changeHandler}
              className='border-2 border-black mt-2 mr-4' />
            <label htmlFor="isVisible">Select Mode ?</label>
          </div>

          <fieldset className='mt-4 border-2 border-black p-1'>
            <legend>Mode :</legend>
            <div className=''>
            <input type="radio"
              name='mode'
              value="Online-Mode"
              checked={formData.mode==="Online-Mode"}
              id='online-mode'
              onChange={changeHandler}
              className='mt-4'
            />
            <label className='mt-4 ml-2' htmlFor="online-mode">Online Mode</label>

            <br />

            <input type="radio"
              name='mode'
              value="Ofline-Mode"
              checked={formData.mode==="Ofline-Mode"}
              id='ofline-mode'
              onChange={changeHandler}
              className='mt-4'
            />
            <label className='mt-4 ml-2' htmlFor="ofline-mode">Ofline Mode</label>
          </div>
          </fieldset>
          
          <label className='mt-4 font-semibold' htmlFor="center">Select Exam Center</label>
          <select 
          name="center" 
          id="center"
          value={formData.favCar}
          onChange={changeHandler}
          className='mt-4 border-2 border-black'
          >
            <option value="Patna">Patna</option>
            <option value="Sheikhpura">Sheikhpura</option>
            <option value="Bhagalpur">Bhagalpur</option>
            <option value="Gaya">Gaya</option>
            <option value="Begusaray">Begusaray</option>

          </select>
          {/* <input type="submit" value='submit' /> */}

          <button className=' px-3 py-2 bg-blue-600 hover:bg-blue-900 mt-4 text-white font-semibold text-lg rounded-lg ml-[-5px]'>Submit</button>

        </form>
        {/* <p>{formData}</p>
      <p>{formData}</p> */}
      </div>
      <Data userdetals={userdetals} />
    </>
  )
}

export default App
