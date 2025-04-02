import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import EditTableForm from "@/components/features/edit-table/EditTableForm";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function EditTablePage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Edit Data Table
            </CreateDashboardHeading>
            <Divider />
            <EditTableForm />
        </BoxContainer>
    );
}

export default EditTablePage;
