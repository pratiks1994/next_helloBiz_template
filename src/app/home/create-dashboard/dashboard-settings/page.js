import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import DashboardSettingsForm from "@/components/features/dashboard-settings/DashboardSettingsForm";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import { routes } from "@/lib/route";
import Link from "next/link";
import React from "react";

function DashboardSettingsPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.create_dashboard} />
                Settings
            </CreateDashboardHeading>
            <Divider />
            <DashboardSettingsForm />
        </BoxContainer>
    );
}

export default DashboardSettingsPage;
