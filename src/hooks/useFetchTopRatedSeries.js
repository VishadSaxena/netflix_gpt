import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedTvSeries } from "../utils/seriesSlice";



const useFetchTopRatedSeries = () => {
    const dispatch = useDispatch();

  useEffect(()=> {
    fetchTopRatedAPI();
  },[]);


  const fetchTopRatedAPI = async () => { // Fetching the Now Playing Movies API and adding them to store with Slice movie
    
    const data = await fetch("https://api.themoviedb.org/3/tv/top_rated", API_OPTIONS);

    const json = await data.json();

    // console.log(json.results);

    dispatch(addTopRatedTvSeries(json.results));
    
  }

}

export default useFetchTopRatedSeries;