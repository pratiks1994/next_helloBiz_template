import { BarChartComponent } from "@/components/charts/BarChart";
import { WidgetAction, WidgetBody, WidgetHeader, WidgetRoot, WidgetTitle } from "@/components/ui/widget/widget";
import { replaceParams, routes } from "@/lib/route";

function BarChartWidget({ widget, isEditable = true }) {
    return (
        <WidgetRoot>
            <WidgetHeader>
                <WidgetTitle>{widget.widget_title}</WidgetTitle>
                {isEditable && <WidgetAction editWidgetUrl={replaceParams(routes.edit_bar_chart, { id: widget.id })} />}
            </WidgetHeader>
            <WidgetBody>
                <BarChartComponent widget={widget} />
            </WidgetBody>
        </WidgetRoot>
    );
}

export default BarChartWidget;
