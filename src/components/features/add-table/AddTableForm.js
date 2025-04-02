"use client";
import { tableFormDefaultValues, tableFormSchema } from "@/lib/schema/addTableSchema";
import { getRandomId } from "@/app/utils/getRandomId";
import { widgetTypes } from "@/lib/enums/enums";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useStore } from "react-redux";
import { getLayoutFromWidgets } from "@/app/utils/getLayoutFromWidgets";
import { getDefaultWidgetLayout } from "@/app/utils/getDefaultWidgetLayout";
import { addWidget } from "@/lib/slices/dashboardSlice";
import { routes } from "@/lib/route";
import { tableFormSteps } from "@/components/formSteps/tableFormSteps";
import MultiStepForm from "../forms/MultiStepForm";

function AddTableForm() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const store = useStore();

    const onSubmit = (data) => {
        const id = getRandomId();
        const widget_type = widgetTypes.TABLE;
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

    return (
        <MultiStepForm
            initialValue={tableFormDefaultValues}
            onSubmit={onSubmit}
            formSchema={tableFormSchema}
            steps={tableFormSteps}
            formId="add-table-form"
        />
    );
}

export default AddTableForm;
