import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import Filter from './component/Filter';
import { filterData, apiUrl } from './data';
import Spinner from './component/Spinner';
import { toast } from "react-toastify";

function App() {
  const [course, setCourse] = useState(null);
  const [loding, setLoding] = useState(true);
  const [category, setCategery] = useState(filterData[0].title)

  async function fetchData() {
    setLoding(true)
    try {
      let response = await fetch(apiUrl);
      let outPut = await response.json()
      setCourse(outPut.data)

    }
    catch (error) {
      toast.error("Network not able to fetch data")
    }
    setLoding(false)

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='min-h-screen flex flex-col bg-gray-700'>
      <div>
        <Navbar />
      </div>

      <div>
        <div>
          <Filter filterData={filterData} category={category} setCategery={setCategery} />
        </div>

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loding ? (<Spinner />) : (<Cards courses={course} category={category} setCategery={setCategery} />)
          }
        </div>
      </div>

    </div>
  )
}

export default App
