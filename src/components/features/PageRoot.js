import React from "react";
import FlexContainer from "../ui/FlexContainer";

function PageRoot({ children, ...props }) {
    return (
        <FlexContainer flexGrow={1} direction="column" px={{ base: 4, md: 6 }} py={{ base: 2, md: 4 }} {...props}>
            {children}
        </FlexContainer>
    );
}

export default PageRoot;
