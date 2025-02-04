"use client";
import React from "react";
import { Provider } from "../ui/provider";
import StoreProvider from "./ReduxStoreProvider";
import AuthProvider from "./AuthProvider";

function Providers({ children }) {
    return (
        <AuthProvider>
            <StoreProvider>
                <Provider>{children}</Provider>
            </StoreProvider>
        </AuthProvider>
    );
}

export default Providers;
