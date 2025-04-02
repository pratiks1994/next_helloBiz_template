"use client";

import { pieChartFormDefaultValues } from "@/lib/schema/addPieChartSchema";
import React from "react";
import { getRandomId } from "@/app/utils/getRandomId";
import { widgetTypes } from "@/lib/enums/enums";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/hooks";
import { useStore } from "react-redux";
import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { getDefaultWidgetLayout } from "@/app/utils/getDefaultWidgetLayout";
import { addWidget } from "@/lib/slices/dashboardSlice";
import { routes } from "@/lib/route";
import PieChartForm from "../forms/PieChartForm";

function AddPieChartForm() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const store = useStore();

    const onSubmit = (data) => {
        const id = getRandomId();
        const widget_type = widgetTypes.PIE_CHART;
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

    return <PieChartForm onSubmit={onSubmit} initialValues={pieChartFormDefaultValues} />;
}

export default AddPieChartForm;
