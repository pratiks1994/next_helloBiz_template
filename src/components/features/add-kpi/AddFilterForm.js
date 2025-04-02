"use client";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { FormSelectContent, FormSelectRoot, FormSelectTrigger } from "@/components/ui/select/WidgetFormSelect";
import { filterSchema } from "@/lib/schema/addKpiFormSchema";
import { Button, createListCollection, Input, Stack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

const columns = createListCollection({
    items: [
        { label: "Column 1", value: "column1" },
        { label: "Column 2", value: "column2" },
        { label: "Column 3", value: "column3" },
        { label: "Column 4", value: "column4" },
    ],
});

const operators = createListCollection({
    items: [
        { label: "<", value: "<" },
        { label: ">", value: ">" },
        { label: "=", value: "=" },
        { label: "<=", value: "<=" },
        { label: ">=", value: ">=" },
        { label: "!=", value: "!=" },
    ],
});

function AddFilterForm({ onAdd }) {
    const methods = useForm({
        defaultValues: {
            column: "",
            operator: "",
            value: "",
        },
        mode: "onChange",
        resolver: zodResolver(filterSchema),
    });

    const { handleSubmit, reset } = methods;

    const onSubmit = (data) => {
        onAdd(data);
        reset();
    };
    return (
        <FormProvider {...methods}>
            <Stack gap="3">
                <FormController
                    name="column"
                    label="Select Column"
                    render={({ field }) => (
                        <FormSelectRoot field={field} collection={columns}>
                            <FormSelectTrigger placeholder="Select Column" />
                            <FormSelectContent collection={columns} />
                        </FormSelectRoot>
                    )}
                />
                <FormController
                    name="operator"
                    label="Operator"
                    render={({ field }) => (
                        <FormSelectRoot field={field} collection={operators}>
                            <FormSelectTrigger placeholder="Select Column" />
                            <FormSelectContent collection={operators} />
                        </FormSelectRoot>
                    )}
                />
                <FormController
                    name="value"
                    label="Value"
                    render={({ field }) => <Input size="sm" placeholder="Value" type="text" {...field} />}
                />
                <Button size="sm" onClick={handleSubmit(onSubmit)} variant={"subtle"}>
                    Add
                </Button>
            </Stack>
            {/* </form> */}
        </FormProvider>
    );
}

export default AddFilterForm;
