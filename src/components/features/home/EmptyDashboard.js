import FlexContainer from "@/components/ui/FlexContainer";
import { Button, ButtonGroup, EmptyState, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { HiColorSwatch } from "react-icons/hi";

export const EmptyDashboard = () => {
    return (
        <FlexContainer w="100%" h="calc(100dvh - 190px)" alignItems="center" justifyContent="center">
            <EmptyState.Root>
                <EmptyState.Content>
                    <EmptyState.Indicator>
                        <HiColorSwatch />
                    </EmptyState.Indicator>
                    <VStack textAlign="center">
                        <EmptyState.Title>We couldn&apos;t find any dashboards</EmptyState.Title>
                        <EmptyState.Description>Add a new Dashboard to get started</EmptyState.Description>
                    </VStack>
                    <ButtonGroup>
                        <Button as={Link} href="/dashboard/new" variant="solid">
                            Create New Dashboard
                        </Button>
                    </ButtonGroup>
                </EmptyState.Content>
            </EmptyState.Root>
        </FlexContainer>
    );
};
