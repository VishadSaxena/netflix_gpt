import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if(!movies) return ;                    // Initially in 1st render API isnt called, without this it will throw error that movies[] is empty
    const mainMovie = movies[0];            // making the 1st movie as video background and video title - movie

    //console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} despriction={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer