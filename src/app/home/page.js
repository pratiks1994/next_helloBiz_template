import CreateDashboardAction from "@/components/features/home/CreateDashboardAction";
import Dashboards from "@/components/features/home/Dashboards";
import { PageHeader, PageHeaderAction, PageHeaderTitle } from "@/components/features/PageHeader";
import PageRoot from "@/components/features/PageRoot";

import React from "react";

function HomePage() {
    return (
        <PageRoot>
            <PageHeader>
                <PageHeaderTitle>Dashboards</PageHeaderTitle>
                <PageHeaderAction>
                    <CreateDashboardAction />
                </PageHeaderAction>
            </PageHeader>
            <Dashboards />
        </PageRoot>
    );
}

export default HomePage;
