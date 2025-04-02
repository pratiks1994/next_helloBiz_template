"use client";
import { selectWidgetById } from "@/lib/slices/dashboardSlice";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import MultiStepForm from "@/components/features/forms/MultiStepForm";
import { tableFormSchema } from "@/lib/schema/addTableSchema";
import { tableFormSteps } from "@/components/formSteps/tableFormSteps";

function EditTableForm() {
    const { id } = useParams();
    const tableData = useSelector((state) => selectWidgetById(state, id));

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <MultiStepForm
            initialValue={tableData}
            onSubmit={onSubmit}
            formSchema={tableFormSchema}
            steps={tableFormSteps}
            formId="edit-table-form"
        />
    );
}

export default EditTableForm;
