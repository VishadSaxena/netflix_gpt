import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState : {
        toggleGpt: false,
    },
    reducers: {
        toggleGptSearch : (state) => {
            state.toggleGpt = !state.toggleGpt;
        }
    }
});


export const {toggleGptSearch} = gptSlice.actions;

export default gptSlice.reducer;