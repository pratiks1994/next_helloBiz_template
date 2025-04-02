import { defineTextStyles } from "@chakra-ui/react";

export const textStyles = defineTextStyles({
    body: {
        description: "The body text style - used in paragraphs",
        value: {
            fontFamily: "Poppins, sans-serif",
            fontWeight: "500",
            fontSize: "sm",
            lineHeight: "24",
            letterSpacing: "0",
            textDecoration: "None",
            textTransform: "None",
        },
    },
});
