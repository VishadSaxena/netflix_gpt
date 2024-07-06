import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailers } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMoviesTrailer = (movieId) => {

    const dispatch = useDispatch();

    useEffect(()=> {
        fetchMovieVideos();
    },[]);

    const fetchMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS) ;     // fetching all Videos of a certain movie from movie Id
        const json = await data.json();

        //console.log(json);

        const trailersData = json.results.filter((video)=> video.type === "Trailer");                   // Filtering the trailers from the videos
        //console.log(trailer);

        const mainTrailer = (trailersData.length) ? trailersData[0] : json.results[0];                  // taking 1st trailer or 1st video as main trailer
        //console.log(mainTrailer);

        dispatch(addMovieTrailers(mainTrailer));                                                        // Added main trailers details on the store
    }
};

export default useMoviesTrailer;