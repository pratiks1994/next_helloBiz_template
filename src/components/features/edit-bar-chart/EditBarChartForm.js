"use client";
import { selectWidgetById } from "@/lib/slices/dashboardSlice";
import { useParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import BarChartForm from "../forms/BarChartForm";

function EditBarChartForm() {
    const { id } = useParams();
    const chartData = useSelector((state) => selectWidgetById(state, id));
    const onSubmit = (data) => {
        console.log(data);
    };
    return <BarChartForm initialValues={chartData} onSubmit={onSubmit} />;
}

export default EditBarChartForm;
