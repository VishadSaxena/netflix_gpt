import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies} from "../utils/moviesSlice";



const useFetchPopularMovies = () => {
    const dispatch = useDispatch();

  useEffect(()=> {
    fetchPopularAPI();
  },[]);


  const fetchPopularAPI = async () => { // Fetching the Now Playing Movies API and adding them to store with Slice movie
    
    const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);

    const json = await data.json();

    // console.log(json.results);

    dispatch(addPopularMovies(json.results));
    
  }

}

export default useFetchPopularMovies;