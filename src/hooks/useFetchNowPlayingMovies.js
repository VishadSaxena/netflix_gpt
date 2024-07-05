import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";



const useFetchNowPlayingMovies = () => {
    const dispatch = useDispatch();

  useEffect(()=> {
    fetchNowPlayingAPI();
  },[]);


  const fetchNowPlayingAPI = async () => { // Fetching the Now Playing Movies API and adding them to store with Slice movies
    
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", API_OPTIONS);

    const json = await data.json();

    // console.log(json.results);

    dispatch(addNowPlayingMovies(json.results));
    
  }

}

export default useFetchNowPlayingMovies;