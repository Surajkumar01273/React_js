import { useState } from 'react'
import './App.css'
import Tours from './component/Tours'
import data from './data'

function App() {
  const [tours, setTours] = useState(data)
  // console.log(data);

//this function remove tour card itd function call im card component onclick button

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id) 
    setTours(newTours)
  }

  if(tours.length===0){
    return(
    <div className='text-center text-xl p-4 inline-block md:mt-52 md:ml-[45%] ml-16'>
        <h1>No Tour Left</h1>
        <button className='bg-gray-500 p-1 text-white rounded-lg px-10 mt-2' onClick={()=> setTours(data)}>Refresh</button>
    </div>
    )
  }
  

  return (
    <>
    <div>
    <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
    </>
  )
}

export default App
