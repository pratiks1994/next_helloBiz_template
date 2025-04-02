"use client";
import { Tag } from "@/components/ui/tag";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddFilterForm from "./AddFilterForm";
import { Heading } from "@chakra-ui/react";

function SelectFilters() {
    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormProvider)
        name: "filters", // unique name for your Field Array
    });

    return (
        <>
            <Heading size="md">Widget Filters</Heading>

            {fields.map((field, index) => (
                <Tag key={field.id} closable onClose={() => remove(index)} size="lg" justifyContent="space-between">
                    {field.column} {field.operator} {field.value}
                </Tag>
            ))}
            <AddFilterForm onAdd={(data) => append(data)} />
        </>
    );
}

export default SelectFilters;
