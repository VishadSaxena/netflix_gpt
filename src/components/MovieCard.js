import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
  return (
    <div className='w-[180px] pr-2'>
        <img src={IMG_CDN_URL + poster} alt='Movie poster'/>
    </div>
  )
}

export default MovieCard