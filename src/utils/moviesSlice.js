import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailers: null,
        trendingMovies: null,
        popularMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMovieTrailers : (state,action) => {
            state.movieTrailers = action.payload;
        },
        addTrendingMovies : (state,action) => {
            state.trendingMovies = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addMovieTrailers, addTrendingMovies, addPopularMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

