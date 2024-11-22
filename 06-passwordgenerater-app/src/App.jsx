import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  // Usestate Hook

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumberAlloud] = useState(false)
  const [characterAllowed, setcharacterAllowed] = useState(false)
  const [password, setpassword] = useState("")


  //****************    useRef Hook   ************ */

  const passwordref = useRef(null)

// UseCallback Hook

  const passwordGenerater = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "@#$%~*{[]}?<>|"

    for (let i = 1; i <= length; i++) {
      let char = Math.round(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setpassword(pass)

  }, [length, numberAllowed, characterAllowed, setpassword])

  const copypasswordToClipboard = useCallback( () => {
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(password);
  }, [password])



//  ****************     usedEffect Hook      ***********************88

  useEffect(() => {
    passwordGenerater()
  }, [length, numberAllowed, characterAllowed, passwordGenerater])


  return (
    <>
      <div className='w-full max-w-md bg-gray-700 text-orange-500 mx-auto my-8 shadow-md rounded-lg px-4 py-3'>
        <h1 className='text-center text-white my-3'>Password Generater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          className='outline-none w-full py-1 px-3' 
          placeholder='password' 
          value={password} 
          readOnly
          ref={passwordref}
           />

          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copypasswordToClipboard}
          >Copy</button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberAlloud((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              className='bg-blue-400'
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => {
                setcharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

