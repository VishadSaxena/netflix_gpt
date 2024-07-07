import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => { 

    //console.log(movies);

   return (
  movies && <div className='px-2'>
        <h1 className='text-3xl font-semibold py-3 ml-14 text-white'>
            {title}
        </h1>
        <div className='flex overflow-x-scroll'>
        
            <div className="flex ml-8">
                {movies.map(movie =>  <MovieCard key={movie.id} poster={movie.poster_path}/>)} 
            </div>    
        </div>
    </div>
  )
}

export default MovieList