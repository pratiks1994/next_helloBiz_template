"use client";
import { selectWidgetById } from "@/lib/slices/dashboardSlice";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import PieChartForm from "../forms/PieChartForm";
function EditPiechartForm() {
    const { id } = useParams();
    const chartData = useSelector((state) => selectWidgetById(state, id));
    const onSubmit = (data) => {
        console.log(data);
    };
    return <PieChartForm initialValues={chartData} onSubmit={onSubmit} />;
}

export default EditPiechartForm;
