import AddKpiForm from "@/components/features/add-kpi/AddKpiForm";
import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function AddKpiPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                KPI
            </CreateDashboardHeading>
            <Divider />
            <AddKpiForm />
        </BoxContainer>
    );
}

export default AddKpiPage;
