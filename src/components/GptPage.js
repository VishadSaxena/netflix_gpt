import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieRecommendations from './GptMovieRecommendations'
import { BACKGROUND_PIC } from '../utils/constants'

const GptPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
          <img src= {BACKGROUND_PIC} alt="Background" />
      </div>
      <GptSearchBar/>
      <GptMovieRecommendations/>
    </div>
  )
}

export default GptPage