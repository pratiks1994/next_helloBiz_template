import SelectFilters from "../features/add-kpi/SelectFilters";
import SelectKpiCardTemplate from "../features/add-kpi/SelectKpiCardTemplate";
import SelectSource from "../features/add-kpi/SelectSource";
import WidgetConfig from "../features/add-kpi/WidgetConfig";

export const kpiFormSteps = [
    {
        component: <SelectSource />,
        fields: ["field_source"],
    },

    {
        component: <SelectKpiCardTemplate />,
        fields: ["template"],
    },
    {
        component: <WidgetConfig />,
        fields: ["widget_title", "column", "aggregate"],
    },
    {
        component: <SelectFilters />,
        fields: ["filters"],
    },
];
