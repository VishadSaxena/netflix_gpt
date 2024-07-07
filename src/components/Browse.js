import Header from './Header'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useFetchTrendingMovies from '../hooks/useFetchTrending';
import useFetchPopularMovies from '../hooks/useFetchPopularMovies';
import useFetchUpcomingMovies from '../hooks/useFetchUpcomingMovies';
import useFetchTopRatedSeries from '../hooks/useFetchTopRatedSeries';

const Browse = () => {

  useFetchNowPlayingMovies();
  useFetchTrendingMovies();
  useFetchPopularMovies();
  useFetchUpcomingMovies();
  useFetchTopRatedSeries();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse