import AddPieChartForm from "@/components/features/add-pie-chart/AddPieChartForm";
import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function AddPieChart() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Create Pie Chart
            </CreateDashboardHeading>
            <Divider />
            <AddPieChartForm />
        </BoxContainer>
    );
}

export default AddPieChart;
