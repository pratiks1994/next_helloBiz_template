import CreateDashboardHeading from "@/components/features/create-dashboard/CreateDashboardHeading";
import WidgetLink, { WidgetLinkIcon } from "@/components/features/create-dashboard/WidgetLink";
import BackIconButton from "@/components/ui/BackIconButton";
import BoxContainer from "@/components/ui/BoxContainer";
import Divider from "@/components/ui/Divider";
import FlexContainer from "@/components/ui/FlexContainer";
import { routes } from "@/lib/route";
import Link from "next/link";
import { FaChartBar, FaChartPie, FaIdCard, FaTable } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const widgets = [
    {
        name: "KPI",
        icon: <FaIdCard />,
        href: routes.add_kpi,
    },
    {
        name: "Pie Chart",
        icon: <FaChartPie />,
        href: routes.add_pie_chart,
    },
    {
        name: "Bar Chart",
        icon: <FaChartBar />,
        href: routes.add_bar_chart,
    },
    {
        name: "Linear Data",
        icon: <FaTable />,
        href: routes.add_table,
    },
];

function CreateDashboardPage() {
    return (
        <BoxContainer>
            <CreateDashboardHeading>
                <BackIconButton as={Link} href={routes.home} />
                Select Widget
            </CreateDashboardHeading>
            <Divider />
            <FlexContainer px="3" py="3" flexDirection={"column"} gap={1}>
                {widgets.map((widget) => (
                    <WidgetLink key={widget.name} href={widget.href}>
                        <WidgetLinkIcon>{widget.icon}</WidgetLinkIcon>
                        {widget.name}
                    </WidgetLink>
                ))}
                <Divider my="2" />
                <WidgetLink href={routes.dashboard_settings} variant="subtle">
                    <WidgetLinkIcon>
                        <FaGear />
                    </WidgetLinkIcon>
                    Settings
                </WidgetLink>
            </FlexContainer>
        </BoxContainer>
    );
}

export default CreateDashboardPage;
