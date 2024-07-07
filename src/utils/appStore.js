import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import seriesSlice from "./seriesSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        series: seriesSlice,
    }
});

export default appStore;