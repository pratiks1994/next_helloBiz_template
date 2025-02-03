import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
    },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
