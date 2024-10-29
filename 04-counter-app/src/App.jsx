import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  function Addvalue(){
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)
    setCount(prevcount => prevcount + 1)
  }

  function Removevalue(){
    setCount(prevcount => prevcount - 4
    )
  }

  return (
    <>
    <h1>Counter React App</h1>
    <h2>Counter Value: {count}</h2>
    <button onClick={Addvalue}>Add value {count}</button>
    <br /> <br />
    <button onClick={Removevalue}>Romove Value {count}</button>
    <p>footer: {count}</p>
    </>
  )
}

export default App
