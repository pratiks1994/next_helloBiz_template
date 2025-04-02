"use client";

import { useDispatch, useStore } from "react-redux";
import { addWidget } from "@/lib/slices/dashboardSlice";
import { useRouter } from "next/navigation";
import { routes } from "@/lib/route";
import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { getRandomId } from "@/app/utils/getRandomId";
import { widgetTypes } from "@/lib/enums/enums";
import { getDefaultWidgetLayout } from "@/app/utils/getDefaultWidgetLayout";

import KpiForm from "../forms/KpiForm";
import { kpiFormDefaultValues } from "@/lib/schema/addKpiFormSchema";

function AddKpiForm() {
    const dispatch = useDispatch();
    const store = useStore();
    const router = useRouter();

    const onSubmit = (data) => {
        const id = getRandomId();
        const widget_type = widgetTypes.KPI;
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

    return <KpiForm onSubmit={onSubmit} initialValue={kpiFormDefaultValues} />;
}

export default AddKpiForm;
