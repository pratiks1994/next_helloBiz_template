import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import EditKpiForm from "@/components/features/edit-kpi/EditKpiForm";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function EditKpiPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Edit KPI
            </CreateDashboardHeading>
            <Divider />
            <EditKpiForm />
        </BoxContainer>
    );
}

export default EditKpiPage;
