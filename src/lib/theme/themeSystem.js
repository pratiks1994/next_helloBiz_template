import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { tokens } from "./tokens";
import { semanticTokens } from "./semanticToken";
import { textStyles } from "./textStyle";

const config = defineConfig({
    globalCss: {
        html: {
            colorPalette: "brand",
            fontFamily: "Poppins, sans-serif",
        },
    },
    theme: {
        tokens,
        semanticTokens,
        textStyles: textStyles,
    },
});

export const themeSystem = createSystem(defaultConfig, config);
