import BarChartTemplateSelect from "../features/add-bar-chart-form/BarChartTemplateSelect";
import BarChartWidgetConfig from "../features/add-bar-chart-form/BarChartWidgetConfig";
import SelectFilters from "../features/add-kpi/SelectFilters";
import SelectSource from "../features/add-kpi/SelectSource";

export const barChartFormSteps = [
    {
        component: <SelectSource />,
        fields: ["field_source"],
    },

    {
        component: <BarChartTemplateSelect />,
        fields: ["template"],
    },
    {
        component: <BarChartWidgetConfig />,
        fields: ["widget_title", "x_column", "y_column", "aggregate", "color", "color_field"],
    },
    {
        component: <SelectFilters />,
        fields: ["filters"],
    },
];
