"use client";
import BoxContainer from "@/components/ui/BoxContainer";
import { CardRoot } from "@/components/ui/Card";
import FlexContainer from "@/components/ui/FlexContainer";
import PageItemCountSelector from "./PageItemCountSelector";
import { PageItemSearch } from "./PageItemSearch";
import { HStack } from "@chakra-ui/react";
import { DashboardsList } from "./DashboardsList";
import { GridContainer } from "@/components/ui/GridContainer";
import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPageText,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination";
import dashboardList from "@/lib/mock-data/dashboardList";
import { usePaginatedSearch } from "@/lib/hooks/usePaginatedSearch";
import { EmptyDashboard } from "./EmptyDashboard";

function Dashboards() {
    const {
        items: currentPageDashboards,
        page,
        pageSize,
        search,
        totalItems,
        handlePageChange,
        handlePageSizeChange,
        handleSearchChange,
    } = usePaginatedSearch(dashboardList, {
        initialPageSize: 10,
    });

    if (!dashboardList.length) {
        return <EmptyDashboard />;
    }

    return (
        <>
            <BoxContainer pt="3" pb="2">
                <CardRoot>
                    <FlexContainer gap={2} px={4} py={2} items="center" justify="space-between" wrap="wrap-reverse">
                        <PageItemCountSelector value={[pageSize]} onChange={handlePageSizeChange} />
                        <PageItemSearch value={search} onChange={handleSearchChange} />
                    </FlexContainer>
                </CardRoot>
            </BoxContainer>
            <GridContainer py="2" gap="4">
                <DashboardsList dashboards={currentPageDashboards} />
            </GridContainer>
            <PaginationRoot page={page} onPageChange={handlePageChange} count={totalItems} pageSize={pageSize} defaultPage={1} py="2">
                <HStack>
                    <PaginationPageText format="long" flex="1" fontSize="sm" color="fg.muted" />
                    <PaginationPrevTrigger />
                    <PaginationItems />
                    <PaginationNextTrigger />
                </HStack>
            </PaginationRoot>
        </>
    );
}

export default Dashboards;
