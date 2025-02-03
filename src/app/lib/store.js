import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";

export const makeStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            count: countReducer,
        },
    });
};
