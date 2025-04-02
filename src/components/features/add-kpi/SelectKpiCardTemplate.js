import { Field } from "@/components/ui/field";
import { GridContainer, GridContainerItem } from "@/components/ui/GridContainer";
import { RadioCardRoot, RadioCardTemplateItem } from "@/components/ui/radio-card";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Stat } from "@/components/ui/state";

function SelectKpiCardTemplate() {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Field label="Select Template" errorText={errors.field_source?.message} invalid={!!errors.field_source}>
            <Controller
                control={control}
                name="template"
                render={({ field }) => (
                    <RadioCardRoot
                        orientation="vertical"
                        align="center"
                        justify="center"
                        w="100%"
                        {...field}
                        onValueChange={({ value }) => field.onChange(value)}
                    >
                        <GridContainer gap="2">
                            {items.map((item) => (
                                <GridContainerItem colSpan={24} key={item.value}>
                                    <RadioCardTemplateItem key={item.value} value={item.value}>
                                        {item.template}
                                    </RadioCardTemplateItem>
                                </GridContainerItem>
                            ))}
                        </GridContainer>
                    </RadioCardRoot>
                )}
            />
        </Field>
    );
}

export default SelectKpiCardTemplate;

const items = [
    { value: "1", template: <Stat label="Sales" valueText="$2.24k" w="100%" size="sm" p="1" /> },
    { value: "2", template: <Stat label="Users" valueText="999" w="100%" size="sm" p="1" /> },
    { value: "3", template: <Stat label="Earnings" valueText="$4.24k" w="100%" size="sm" p="1" /> },
    { value: "4", template: <Stat label="Cost" valueText="$8.24k" w="100%" size="sm" p="1" /> },
    { value: "5", template: <Stat label="Profit" valueText="$5.4k" w="100%" size="sm" p="1" /> },
];
