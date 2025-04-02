import { Float } from "@chakra-ui/react";
import React from "react";

function FloatContainer({ children, ...props }) {
    return <Float {...props}>{children}</Float>;
}

export default FloatContainer;
