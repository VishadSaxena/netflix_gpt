import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'

const Browse = () => {

  useEffect(()=> {
    fetchNowPlayingAPI();
  },[]);


  const fetchNowPlayingAPI = async () => {
    
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);

    const json = await data.json();

    console.log(json.results);


  }

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse