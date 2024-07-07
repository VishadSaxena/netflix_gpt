import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";



const useFetchTrendingMovies = () => {
    const dispatch = useDispatch();

  useEffect(()=> {
    fetchTrendingAPI();
  },[]);


  const fetchTrendingAPI = async () => { // Fetching the Now Playing Movies API and adding them to store with Slice movie
    
    const data = await fetch("https://api.themoviedb.org/3/trending/movie/day", API_OPTIONS);

    const json = await data.json();

    // console.log(json.results);

    dispatch(addTrendingMovies(json.results));
    
  }

}

export default useFetchTrendingMovies;