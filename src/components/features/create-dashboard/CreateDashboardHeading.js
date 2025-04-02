import { Heading } from "@chakra-ui/react";
import React from "react";

function CreateDashboardHeading({ children, ...props }) {
    return (
        <>
            <Heading fontSize={"md"} px="4" py="3" display={"flex"} alignItems={"stretch"} gap={1} {...props}>
                {children}
            </Heading>
        </>
    );
}

export default CreateDashboardHeading;
