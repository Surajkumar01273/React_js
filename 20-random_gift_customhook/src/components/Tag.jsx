import React, {  useState } from 'react'
import Spinner from './Spinner'
// import axios from 'axios'
import UseGif from '../hooks/useGif'



const Tag = () => {
// const [gift, setGift] = useState('')
// const [loading, setLoading] = useState('false');
const [tag, setTag] = useState('car')
const {gift, loading, fetchdata} = UseGif(tag);

// async function fetchdata(){
//   setLoading(true)
//   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//   const {data} = await axios.get(url);
//   const imageSource = data.data.images.downsized_large.url;
//   setGift(imageSource)
//   setLoading(false)
// }

// useEffect( () => {
//   fetchdata()
// },[])

function clickHandler(){
  fetchdata(tag)
}

  return (
    <div className='bg-blue-500 w-full md:w-1/3 md:border border-black mt-8 md:rounded-lg flex flex-col items-center'>
      <h1 className='text-xl font-semibold underline mb-4'> Random {tag.toUpperCase()}</h1>
      {
        loading ? (<Spinner />) : (<img src={gift} alt={gift} width='350'/>)
      }

      <input 
      type="text"
      value={tag}
      name='inputtag'
      id='input'
      className='w-10/12 text-lg py-2 rounded-lg px-2 my-4 text-center'
      onChange={(e) => setTag(e.target.value)}
      />

      <button className='bg-pink-900 rounded-lg py-2 w-10/12 text-white mb-3' onClick={clickHandler}>Search</button>
    </div>
  )
}

export default Tag
