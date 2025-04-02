import SelectFilters from "../features/add-kpi/SelectFilters";
import SelectSource from "../features/add-kpi/SelectSource";
import TableWidgetConfig from "../features/add-table/TableWidgetConfig";

export const tableFormSteps = [
    {
        component: <SelectSource />,
        fields: ["field_source"],
    },

    {
        component: <TableWidgetConfig />,
        fields: ["widget_title", "columns"],
    },
    {
        component: <SelectFilters />,
        fields: ["filters"],
    },
];
