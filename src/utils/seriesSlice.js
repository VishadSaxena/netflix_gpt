import { createSlice } from "@reduxjs/toolkit";


const seriesSlice = createSlice({
    name:"series",
    initialState: {
        topRated: null,
    },
    reducers: {
        addTopRatedTvSeries : (state,action) => {
            state.topRated = action.payload;
        },
    },
})

export const {addTopRatedTvSeries} = seriesSlice.actions;

export default seriesSlice.reducer;