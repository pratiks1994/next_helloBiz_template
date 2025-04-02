import { Flex } from "@chakra-ui/react";
import React from "react";

function FlexContainer({ children, ...props }) {
    return <Flex {...props}>{children}</Flex>;
}

export default FlexContainer;
