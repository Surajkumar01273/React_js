// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import UseGif from '../hooks/useGif';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
// const API_KEY  = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const Random = () => {
  // const [gif, setGif] = useState('');
  // const [loding, setLoding] = useState('false');

  // async function fetchdata() {
  //   setLoding(true);
  //   // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   console.log(url)
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoding(false);
  // }
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  const  {gift, loading, fetchdata} = UseGif();

  function clickHandler() {
    fetchdata();
  }

  return (
    <div className='md:w-1/3 w-full  bg-green-500
     md:rounded-lg flex flex-col items-center gap-y-5 md:border border-black'>
      <h1 className='text-xl mt-[15px] underline font-semibold'>A Random Gif</h1>

      {loading ? <Spinner /> : <img src={gift} alt={gift} width='350' />}
      <button
        className='bg-pink-900 py-2 w-10/12 rounded-lg my-4 text-white font-semibold'
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
