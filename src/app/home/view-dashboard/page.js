"use client";

import { PageHeader, PageHeaderAction, PageHeaderTitle } from "@/components/features/PageHeader";
import PageRoot from "@/components/features/PageRoot";
import ViewDashboardGridWidgets from "@/components/features/view-dashboard/ViewDashboardGridWidgets";
import BoxContainer from "@/components/ui/BoxContainer";
import { routes } from "@/lib/route";
import { selectDashboardSettings } from "@/lib/slices/dashboardSlice";
import BackButton from "@/components/ui/buttons/BackButton";
import { useSelector } from "react-redux";

function ViewDashboard() {
    const dashboardSettings = useSelector(selectDashboardSettings);
    return (
        <PageRoot>
            <PageHeader>
                <PageHeaderTitle>{dashboardSettings.dashboard_name}</PageHeaderTitle>
                <PageHeaderAction>
                    <BackButton href={routes.home} />
                </PageHeaderAction>
            </PageHeader>
            <BoxContainer>
                <ViewDashboardGridWidgets />
            </BoxContainer>
        </PageRoot>
    );
}

export default ViewDashboard;
