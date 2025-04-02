import { widgetTypes } from "@/lib/enums/enums";
import { getOptimalPosition } from "./getOptimalposition";

const defaultWidgetSize = {
    [widgetTypes.KPI]: { w: 6, h: 6 },
    [widgetTypes.BAR_CHART]: { w: 12, h: 18 },
    [widgetTypes.PIE_CHART]: { w: 12, h: 18 },
    [widgetTypes.TABLE]: { w: 24, h: 18 },
};

export const getDefaultWidgetLayout = (widget_type, currentLayout) => {
    const { w, h } = defaultWidgetSize[widget_type];
    const { x, y } = getOptimalPosition(currentLayout.lg, w);
    return {
        lg: { x, y, w, h },
        sm: { x, y, w: 24, h },
    };
};
