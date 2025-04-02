import SelectFilters from "../features/add-kpi/SelectFilters";
import SelectSource from "../features/add-kpi/SelectSource";
import PieChartWidgetConfig from "../features/add-pie-chart/PieChartWidgetConfig";
import SelectPieChartTemplate from "../features/add-pie-chart/SelectPieChartTemplate";

export const pieChartFormSteps = [
    {
        component: <SelectSource />,
        fields: ["field_source"],
    },

    {
        component: <SelectPieChartTemplate />,
        fields: ["template"],
    },
    {
        component: <PieChartWidgetConfig />,
        fields: ["widget_title", "column", "aggregate", "color", "color_field"],
    },
    {
        component: <SelectFilters />,
        fields: ["filters"],
    },
];
