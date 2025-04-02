import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import EditBarChartForm from "@/components/features/edit-bar-chart/EditBarChartForm";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function EditBarChartPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Edit Bar Chart
            </CreateDashboardHeading>
            <Divider />
            <EditBarChartForm />
        </BoxContainer>
    );
}

export default EditBarChartPage;
