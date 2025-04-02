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
        reset: () => {
            return initialState;
        },
        addbyTen: (state) => {
            return state + 10;
        },
        customAdd: (state, action) => {
            return state + action.payload;
        },
    },
});

export const { increment, decrement, reset, addbyTen, customAdd } = countSlice.actions;
export default countSlice.reducer;
