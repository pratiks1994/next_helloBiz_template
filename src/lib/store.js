import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slices/countSlice";
import dashboardReducer from "./slices/dashboardSlice";

export const makeStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            count: countReducer,
            dashboard: dashboardReducer,
        },
    });
};
