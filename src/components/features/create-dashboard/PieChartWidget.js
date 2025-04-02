import PieChartComponent from "@/components/charts/PieChart";

import { WidgetAction, WidgetBody, WidgetHeader, WidgetRoot, WidgetTitle } from "@/components/ui/widget/widget";
import { replaceParams, routes } from "@/lib/route";

import React from "react";

function PieChartWidget({ widget, isEditable = true }) {
    return (
        <WidgetRoot>
            <WidgetHeader>
                <WidgetTitle>{widget.widget_title}</WidgetTitle>
                {isEditable && <WidgetAction editWidgetUrl={replaceParams(routes.edit_pie_chart, { id: widget.id })} />}
            </WidgetHeader>
            <WidgetBody>
                <PieChartComponent widget={widget} />
            </WidgetBody>
        </WidgetRoot>
    );
}

export default PieChartWidget;
