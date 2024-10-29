import { useState } from "react"



function App() {
  const [color, setColor] = useState('yellow')

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "red"}}>Red</button>
          <button onClick= {() => setColor("green")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 text-black shadow-lg rounded-2xl" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 text-black shadow-lg rounded-2xl" style={{backgroundColor: "white"}}>White</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("violet")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "violet"}}>Violet</button>
          <button onClick={() => setColor("skyblue")} className="outline-none px-4 py-1 text-white shadow-lg rounded-2xl" style={{backgroundColor: "skyblue"}}>Sky Blue</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
