"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useStore } from "react-redux";
import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { addWidget } from "@/lib/slices/dashboardSlice";
import { routes } from "@/lib/route";
import { getRandomId } from "@/app/utils/getRandomId";
import { widgetTypes } from "@/lib/enums/enums";
import { getDefaultWidgetLayout } from "@/app/utils/getDefaultWidgetLayout";
import { barChartFormDefaultValues } from "@/lib/schema/addBarChartSchema";
import BarChartForm from "../forms/BarChartForm";

function AddBarChartForm() {
    const router = useRouter();
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data) => {
        const id = getRandomId();
        const widget_type = widgetTypes.BAR_CHART;
        const state = store.getState();
        const currentLayout = getLayoutFromWidgets(state.dashboard.widgets);
        const { lg, sm } = getDefaultWidgetLayout(widget_type, currentLayout);
        const layout = {
            lg: { i: id, ...lg },
            sm: { i: id, ...sm },
        };
        dispatch(addWidget({ ...data, widget_type, layout, id }));
        router.push(routes.create_dashboard);
    };

    return <BarChartForm onSubmit={onSubmit} initialValues={barChartFormDefaultValues} />;
}

export default AddBarChartForm;
