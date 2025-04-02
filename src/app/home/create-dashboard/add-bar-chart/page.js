import AddBarChartForm from "@/components/features/add-bar-chart-form/AddBarChartForm";
import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function AddBarChartPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Bar Chart
            </CreateDashboardHeading>
            <Divider />
            <AddBarChartForm />
        </BoxContainer>
    );
}

export default AddBarChartPage;
