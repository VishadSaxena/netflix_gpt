import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies'

const Browse = () => {

  useFetchNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse