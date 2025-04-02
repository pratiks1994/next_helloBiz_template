import { Box } from "@chakra-ui/react";
import React from "react";

function BoxContainer({ children, ...props }) {
    return <Box {...props}>{children}</Box>;
}

export default BoxContainer;
