import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import EditPiechartForm from "@/components/features/edit-pie-chart/EditPiechartForm";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function EditPieChartPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Edit Pie Chart
            </CreateDashboardHeading>
            <Divider />

            <EditPiechartForm />
        </BoxContainer>
    );
}

export default EditPieChartPage;
