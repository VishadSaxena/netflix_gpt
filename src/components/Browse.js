import Header from './Header'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useFetchTrendingMovies from '../hooks/useFetchTrending';
import useFetchPopularMovies from '../hooks/useFetchPopularMovies';
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies';
import useFetchTopRatedSeries from '../hooks/useFetchTopRatedSeries';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector( (store) => store.gpt.toggleGpt);
  useFetchNowPlayingMovies();
  useFetchTrendingMovies();
  useFetchPopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedSeries();

  return (
    <div>
      <Header />
      { showGptSearch ? <GptPage/> : 
      <>
        <MainContainer />
        <SecondaryContainer/>
      </>}
      
      
    </div>
  )
}

export default Browse