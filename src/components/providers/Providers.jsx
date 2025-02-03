"use client";
import React from "react";
import { Provider } from "../ui/provider";
import StoreProvider from "./ReduxStoreProvider";

function Providers({ children }) {
    return (
        <StoreProvider>
            <Provider>{children}</Provider>
        </StoreProvider>
    );
}

export default Providers;
