import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios'
const API_KEY  = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S'
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const UseGif = (tag) => {

  const [gift, setGift] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchdata(tag) {
    try {
      setLoading(true);
      const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
      const imageSource = data.data.images.downsized_large.url;
      setGift(imageSource);
      setLoading(true)
    } catch (error) {
      setInterval(()=>{
      setGift("Error loading GIF", error); // Display an error message instead
      },[2000])
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchdata(tag);
  }, []);

  return {gift, loading, fetchdata}
};

export default UseGif;
