import { defineSemanticTokens } from "@chakra-ui/react";

export const semanticTokens = defineSemanticTokens({
    colors: {
        brand: {
            DEFAULT: {
                value: {
                    _light: "{colors.brand.600}",
                    _dark: "{colors.brand.600}",
                },
            },
            solid: {
                value: {
                    _light: "{colors.brand.600}",
                    _dark: "{colors.brand.600}",
                },
            },
            contrast: {
                value: {
                    _light: "white",
                    _dark: "white",
                },
            },
            fg: {
                value: {
                    _light: "{colors.brand.700}",
                    _dark: "{colors.brand.300}",
                },
            },
            muted: {
                value: {
                    _light: "{colors.brand.300}",
                    _dark: "{colors.brand.700}",
                },
            },
            subtle: {
                value: {
                    _light: "{colors.brand.100}",
                    _dark: "{colors.brand.950}",
                },
            },
            emphasized: {
                value: {
                    _light: "{colors.brand.300}",
                    _dark: "{colors.brand.700}",
                },
            },
            focusRing: {
                value: {
                    _light: "{colors.brand.600}",
                    _dark: "{colors.brand.600}",
                },
            },
        },
    },
});
