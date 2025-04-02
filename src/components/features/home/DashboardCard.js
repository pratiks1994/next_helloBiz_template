import BoxContainer from "@/components/ui/BoxContainer";
import { CardDescription, CardHeader, CardRoot, CardTitle } from "@/components/ui/Card";
import { GridContainerItem } from "@/components/ui/GridContainer";
import { Badge, CardFooter, Icon, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { DashboardCardAction } from "./DashboardCardAction";

function DashboardCard({ dashboard }) {
    return (
        <GridContainerItem colSpan={{ base: 24, md: 12, lg: 8 }}>
            <CardRoot size="sm" border="1px solid" borderColor="border">
                <CardHeader gap="0">
                    <CardTitle display="flex" alignItems="center" justifyContent="space-between">
                        <Text>{dashboard.name}</Text>

                        <DashboardCardAction />
                    </CardTitle>
                    <CardDescription display="flex" alignItems="center" gap="1" color={"fg.muted"} fontSize={"xs"} fontWeight="semibold">
                        <Icon color={"fg.muted"}>
                            <FaUser />
                        </Icon>
                        {dashboard.user}
                    </CardDescription>
                </CardHeader>
                <BoxContainer p="2">
                    <Separator />
                </BoxContainer>
                <CardFooter display="flex" alignItems="center" justifyContent="space-between">
                    <CardDescription display="flex" alignItems="center" gap="1" color={"fg.muted"} fontSize={"xs"}>
                        <Icon>
                            <FaClock />
                        </Icon>
                        Updated {dashboard.last_updated} min ago
                    </CardDescription>

                    <Badge colorPalette={dashboard.status === "preparing" ? "orange" : "green"} ms="auto">
                        {dashboard.status}
                    </Badge>
                </CardFooter>
            </CardRoot>{" "}
        </GridContainerItem>
    );
}

export default DashboardCard;
