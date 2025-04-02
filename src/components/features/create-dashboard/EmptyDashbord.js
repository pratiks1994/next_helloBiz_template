import FlexContainer from "@/components/ui/FlexContainer";
import { EmptyState, VStack } from "@chakra-ui/react";
import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";

function EmptyWidgets() {
    return (
        <FlexContainer w="100%" h="calc(100dvh - 190px)" alignItems="center" justifyContent="center">
            <EmptyState.Root s>
                <EmptyState.Content>
                    <EmptyState.Indicator>
                        <LuLayoutDashboard />
                    </EmptyState.Indicator>
                    <VStack textAlign="center">
                        <EmptyState.Title>Your Dashboard empty</EmptyState.Title>
                        <EmptyState.Description>Add a Widget to get started</EmptyState.Description>
                    </VStack>
                </EmptyState.Content>
            </EmptyState.Root>
        </FlexContainer>
    );
}

export default EmptyWidgets;
