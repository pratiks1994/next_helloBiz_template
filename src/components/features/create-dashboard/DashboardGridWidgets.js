"use client";
import React, { useState } from "react";
import ResponsiveGridLayout from "@/components/ui/grid/ResponsiveGridLayout";
import BoxContainer from "@/components/ui/BoxContainer";
import { useDispatch, useSelector } from "react-redux";
import { selectWidgets, updateWidgetLayout } from "@/lib/slices/dashboardSlice";
import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import KpiWidget from "./KpiWidget";
import { widgetTypes } from "@/lib/enums/enums";
import BarChartWidget from "./BarChartWidget";
import PieChartWidget from "./PieChartWidget";
import DataTableWidget from "./DataTableWidget";
import EmptyWidgets from "./EmptyDashbord";
import LayoutChangeAction from "./LayoutChangeAction";
import { toaster } from "@/components/ui/toaster";
const WIDGET_COMPONENTS = {
    [widgetTypes.KPI]: KpiWidget,
    [widgetTypes.BAR_CHART]: BarChartWidget,
    [widgetTypes.TABLE]: DataTableWidget,
    [widgetTypes.PIE_CHART]: PieChartWidget,
};

function DashboardGridWidgets({ allowChangeLayout = false }) {
    const widgets = useSelector(selectWidgets);
    const widgetlayouts = getLayoutFromWidgets(widgets);
    const dispatch = useDispatch();

    const onLayoutChange = (_newLayout, layouts) => {
        dispatch(updateWidgetLayout(layouts));
    };

    if (widgets.length === 0) return <EmptyWidgets />;

    return (
        <>
            <ResponsiveGridLayout
                layouts={widgetlayouts}
                onLayoutChange={onLayoutChange}
                isDraggable={allowChangeLayout}
                isResizable={allowChangeLayout}
            >
                {widgets.map((widget) => {
                    const WidgetComponent = WIDGET_COMPONENTS[widget.widget_type];
                    return (
                        <BoxContainer
                            key={widget.id}
                            overflow="hidden"
                            border={allowChangeLayout ? "1px solid" : "none"}
                            borderColor="border"
                        >
                            <WidgetComponent widget={widget} />
                        </BoxContainer>
                    );
                })}
            </ResponsiveGridLayout>
        </>
    );
}

export default DashboardGridWidgets;
