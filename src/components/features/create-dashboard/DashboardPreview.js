"use client";
import React, { useState } from "react";
import { PageHeader, PageHeaderAction, PageHeaderTitle } from "../PageHeader";
import PageRoot from "../PageRoot";
import BoxContainer from "@/components/ui/BoxContainer";
import DashboardGridWidgets from "./DashboardGridWidgets";
import { useSelector } from "react-redux";
import { selectDashboardSettings } from "@/lib/slices/dashboardSlice";
import ChangeLayoutAction from "./ChangeLayoutAction";

function DashboardPreview() {
    const dashboardSettings = useSelector(selectDashboardSettings);
    const [allowChangeLayout, setAllowChangeLayout] = useState(false);
    return (
        <PageRoot>
            <PageHeader>
                <PageHeaderTitle>{dashboardSettings.dashboard_name}</PageHeaderTitle>
                <PageHeaderAction>
                    <ChangeLayoutAction
                        allowChangeLayout={allowChangeLayout}
                        onSave={() => setAllowChangeLayout(false)}
                        onChangeLayout={() => setAllowChangeLayout(true)}
                        onCancel={() => setAllowChangeLayout(false)}
                    />
                </PageHeaderAction>
            </PageHeader>
            <BoxContainer>
                <DashboardGridWidgets allowChangeLayout={allowChangeLayout} />
            </BoxContainer>
        </PageRoot>
    );
}

export default DashboardPreview;
