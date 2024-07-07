import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  const series = useSelector(store => store.series);

  //console.log(movies);

  return (
    <div className='bg-black'>
      <div className='-mt-80 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Trending"} movies={movies.trendingMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
        <MovieList title={"TV Series"} movies={series.topRated}/>
      </div>
    </div>
  )
}

export default SecondaryContainer