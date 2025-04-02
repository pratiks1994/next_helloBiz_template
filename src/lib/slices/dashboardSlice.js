import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboard_name: "Dashboard",
    refresh_interval: "10",
    refresh_interval_unit: "min",
    widgets: [],
};

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardSettings: (state, action) => {
            return { ...state, ...action.payload };
        },
        addWidget: (state, action) => {
            state.widgets.push(action.payload);
        },
        updateWidgetLayout: (state, action) => {
            state.widgets.forEach((widget) => {
                const updatedLayout = action.payload.lg.find((layout) => layout.i === widget.id);
                widget.layout.lg = {
                    ...widget.layout.lg,
                    x: updatedLayout.x,
                    y: updatedLayout.y,
                    h: updatedLayout.h,
                    w: updatedLayout.w,
                };
            });
        },
    },
    selectors: {
        selectDashboardName: (state) => state.dashboard_name,
        selectRefreshInterval: (state) => state.refresh_interval,
        selectRefreshIntervalUnit: (state) => state.refresh_interval_unit,
        selectWidgets: (state) => state.widgets,
        selectWidgetLayout: (state) => getLayoutFromWidgets(state.widgets),
        selectWidgetById: (state, widgetId) => state.widgets.find((widget) => widget.id === widgetId),
    },
});

export const selectDashboardSettings = createSelector(
    [
        dashboardSlice.selectors.selectDashboardName,
        dashboardSlice.selectors.selectRefreshInterval,
        dashboardSlice.selectors.selectRefreshIntervalUnit,
    ],
    (dashboard_name, refresh_interval, refresh_interval_unit) => ({
        dashboard_name,
        refresh_interval,
        refresh_interval_unit,
    })
);

export const { setDashboardSettings, addWidget, updateWidgetLayout } = dashboardSlice.actions;
export const { selectWidgets, selectWidgetLayout, selectWidgetById } = dashboardSlice.selectors;
export default dashboardSlice.reducer;
