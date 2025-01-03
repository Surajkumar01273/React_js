import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  // first variation

  // useEffect( ()=>{
  //   console.log("suraj");
  // })

  // 2rd variation

  // useEffect( ()=>{
  //   console.log("UI rendring done");
    
  // },[])

  // 3rd variation

  // useEffect(()=>{
  //   console.log("UI render every raender");
    
  // },[text]);

  //  4th variation of useEffect

  useEffect( ()=>{
    console.log("Listner added");

    return ()=>{
      console.log("Listner Remove");
      
    }
    
  },[text])



  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
    
  }

  return (
    <>
     <input type="text" onChange={changeHandler} />
      </>
  )
}

export default App
