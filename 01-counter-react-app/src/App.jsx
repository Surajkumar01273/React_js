import Chai from "./Chai.jsx";
import { useState} from "react";
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15
  // console.log('suraj count', counter);
  

  function addvalue(){
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    }
  
    // console.log('value added', counter);   
    
  }

  const removevalue = () => {
    // counter = counter - 1
    if(counter > 0){
      setCounter(counter -1)
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addvalue}> Add Value: {counter}</button>
    <br /><br />
    <button onClick={removevalue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    <Chai />
    </>
  )
}

export default App
