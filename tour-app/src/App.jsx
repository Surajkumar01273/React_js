import { useState } from 'react'
import './App.css'
import Tours from './component/Tours'
import data from './data'

function App() {
  const [tours, setTours] = useState(data)
  // console.log(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id) 
    setTours(newTours)
  }

  if(tours.length===0){
    return(
    <div className=''>
        <h1>No Tour Left</h1>
        <button onClick={()=> setTours(data)}>Refresh</button>
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
