import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import seriesSlice from "./seriesSlice";
import gptSlice from "./gptSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        series: seriesSlice,
        gpt: gptSlice,
    }
});

export default appStore;