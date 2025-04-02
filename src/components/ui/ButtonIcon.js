import { IconButton } from "@chakra-ui/react";
import React from "react";

function ButtonIcon({ children, size = "sm", variant = "solid", ...props }) {
    return (
        <IconButton size={size} variant={variant} _hover={{ bg: "brand.contrast/10" }} {...props}>
            {children}
        </IconButton>
    );
}

export default ButtonIcon;
