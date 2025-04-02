import DashboardPreview from "@/components/features/create-dashboard/DashboardPreview";
import BoxContainer from "@/components/ui/BoxContainer";
import FlexContainer from "@/components/ui/FlexContainer";
import React from "react";

function layout({ children }) {
    return (
        <FlexContainer flexGrow={1}>
            <BoxContainer w={{ base: "56", md: "64" }} bg="bg">
                {children}
            </BoxContainer>
            <BoxContainer flexGrow={1}>
                <DashboardPreview />
            </BoxContainer>
        </FlexContainer>
    );
}

export default layout;
