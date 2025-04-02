"use client";
import React from "react";
import { Provider } from "../ui/provider";
import StoreProvider from "./ReduxStoreProvider";
import AuthProvider from "./AuthProvider";
import { Toaster } from "../ui/toaster";

function Providers({ children }) {
    return (
        <AuthProvider>
            <StoreProvider>
                <Provider>
                    {children}
                    <Toaster />
                </Provider>
            </StoreProvider>
        </AuthProvider>
    );
}

export default Providers;
