"use client";
import { selectWidgetById } from "@/lib/slices/dashboardSlice";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import KpiForm from "../forms/KpiForm";

function EditKpiForm() {
    const { id } = useParams();
    const kpiData = useSelector((state) => selectWidgetById(state, id));

    const onSubmit = (data) => {
        console.log(data);
    };

    return <KpiForm initialValue={kpiData} onSubmit={onSubmit} />;
}

export default EditKpiForm;
