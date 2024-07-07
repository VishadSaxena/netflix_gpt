import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";



const useFetchUpcomingMovies = () => {
    const dispatch = useDispatch();

  useEffect(()=> {
    fetchUpcomingAPI();
  },[]);


  const fetchUpcomingAPI = async () => { // Fetching the Now Playing Movies API and adding them to store with Slice movie
    
    const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);

    const json = await data.json();

    // console.log(json.results);

    dispatch(addUpcomingMovies(json.results));
    
  }

}

export default useFetchUpcomingMovies;