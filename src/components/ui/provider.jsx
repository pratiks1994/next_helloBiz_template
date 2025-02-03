"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function Provider({ children }) {
    return (
        <ChakraProvider value={defaultSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    );
}
