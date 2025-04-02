import AddTableForm from "@/components/features/add-table/AddTableForm";
import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function AddDataTablePage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Linear Data
            </CreateDashboardHeading>
            <Divider />
            <AddTableForm />
        </BoxContainer>
    );
}

export default AddDataTablePage;
