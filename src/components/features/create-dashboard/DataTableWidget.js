import { WidgetAction, WidgetBody, WidgetHeader, WidgetRoot, WidgetTitle } from "@/components/ui/widget/widget";

import DataTableComponent from "./DataTableComponent";
import { replaceParams, routes } from "@/lib/route";

function DataTableWidget({ widget, isEditable = true }) {
    return (
        <WidgetRoot>
            <WidgetHeader>
                <WidgetTitle>{widget.widget_title}</WidgetTitle>
                {isEditable && <WidgetAction editWidgetUrl={replaceParams(routes.edit_table, { id: widget.id })} />}
            </WidgetHeader>
            <WidgetBody overflow="auto" px="2" pt="3">
                <DataTableComponent />
            </WidgetBody>
        </WidgetRoot>
    );
}

export default DataTableWidget;
