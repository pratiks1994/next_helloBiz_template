import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export const GridContainer = ({ children, ...props }) => {
    const { templateColumns = "repeat(24, 1fr)", ...rest } = props;
    return (
        <Grid templateColumns={templateColumns} {...rest}>
            {children}
        </Grid>
    );
};

export const GridContainerItem = ({ children, ...props }) => {
    return <GridItem {...props}>{children}</GridItem>;
};
