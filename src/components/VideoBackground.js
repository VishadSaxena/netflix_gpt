import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailers } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {

    const dispatch = useDispatch();

    const trailer = useSelector((store) => store.movies?.movieTrailers);

    useEffect(()=> {
        fetchMovieVideos();
    },[]);

    const fetchMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/786892/videos", API_OPTIONS) ;
        const json = await data.json();

        //console.log(json);

        const trailersData = json.results.filter((video)=> video.type === "Trailer");
        //console.log(trailer);

        const mainTrailer = (trailersData.length) ? trailersData[0] : json.results[0];
        //console.log(mainTrailer);

        dispatch(addMovieTrailers(mainTrailer));
    }
  return (

    <div>
        <iframe 
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/"+ trailer?.key}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            ></iframe>
    </div>
  )
}

export default VideoBackground