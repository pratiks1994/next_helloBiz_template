import { Heading } from "@chakra-ui/react";
import React from "react";
import FlexContainer from "../ui/FlexContainer";
import BoxContainer from "../ui/BoxContainer";

export function PageHeader({ children, ...props }) {
    return (
        <FlexContainer
            justify={{ sm: "center", md: "space-between" }}
            direction={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 0 }}
            align="center"
            flexWrap="wrap"
            {...props}
        >
            {children}
        </FlexContainer>
    );
}

export function PageHeaderTitle({ children, ...props }) {
    return (
        <Heading as="h1" color="fg.muted" {...props}>
            {children}
        </Heading>
    );
}

export function PageHeaderAction({ children, ...props }) {
    return <BoxContainer {...props}>{children}</BoxContainer>;
}
