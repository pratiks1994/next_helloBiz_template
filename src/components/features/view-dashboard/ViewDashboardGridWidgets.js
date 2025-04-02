import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { selectWidgets } from "@/lib/slices/dashboardSlice";
import React from "react";
import { useSelector } from "react-redux";
import EmptyWidgets from "../create-dashboard/EmptyDashbord";
import ResponsiveGridLayout from "@/components/ui/grid/ResponsiveGridLayout";
import BoxContainer from "@/components/ui/BoxContainer";
import { widgetTypes } from "@/lib/enums/enums";
import KpiWidget from "../create-dashboard/KpiWidget";
import BarChartWidget from "../create-dashboard/BarChartWidget";
import DataTableWidget from "../create-dashboard/DataTableWidget";
import PieChartWidget from "../create-dashboard/PieChartWidget";

const WIDGET_COMPONENTS = {
    [widgetTypes.KPI]: KpiWidget,
    [widgetTypes.BAR_CHART]: BarChartWidget,
    [widgetTypes.TABLE]: DataTableWidget,
    [widgetTypes.PIE_CHART]: PieChartWidget,
};

function ViewDashboardGridWidgets() {
    const widgets = useSelector(selectWidgets);
    const widgetlayouts = getLayoutFromWidgets(widgets);

    if (widgets.length === 0) return <EmptyWidgets />;

    return (
        <ResponsiveGridLayout layouts={widgetlayouts} isDraggable={false} isResizable={false}>
            {widgets.map((widget) => {
                const WidgetComponent = WIDGET_COMPONENTS[widget.widget_type];
                return (
                    <BoxContainer key={widget.id} overflow="hidden">
                        <WidgetComponent widget={widget} isEditable={false} />
                    </BoxContainer>
                );
            })}
        </ResponsiveGridLayout>
    );
}

export default ViewDashboardGridWidgets;
