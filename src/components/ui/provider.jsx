"use client";

import { themeSystem } from "@/lib/theme/themeSystem";
import { ChakraProvider, defaultConfig } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function Provider({ children }) {
    return (
        <ChakraProvider value={themeSystem}>
            <ThemeProvider attribute="class" disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </ChakraProvider>
    );
}
