"use client";
import BoxContainer from "@/components/ui/BoxContainer";
import { CheckboxCard } from "@/components/ui/checkbox-card";
import FlexContainer from "@/components/ui/FlexContainer";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { CheckboxGroup, Fieldset, Input, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { MdDragIndicator } from "react-icons/md";
import { useController, useFormContext } from "react-hook-form";

const columnsList = [
    { label: "Column 1", value: "column_1" },
    { label: "Column 2", value: "column_2" },
    { label: "Column 3", value: "column_3" },
    { label: "Column 4", value: "column_4" },
];

const ResponsiveGridLayout = WidthProvider(Responsive);

function TableWidgetConfig() {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    const columns = useController({
        control,
        name: "columns",
    });

    const [layout, setLayout] = useState(
        columnsList.map((item, index) => ({
            i: item.value,
            x: 0,
            y: index,
            w: 12,
            h: 2,
        }))
    );

    const updateFormValues = (selectedValues, currentLayout) => {
        if (selectedValues.length === 0) {
            columns.field.onChange([]);
            return;
        }

        // Sort columns by their y-position in the layout
        const sortedLayout = [...currentLayout].sort((a, b) => a.y - b.y);

        // Create a new ordered array based on the layout
        const newOrderedValues = sortedLayout.map((item) => item.i).filter((value) => selectedValues.includes(value));

        // Update the form with values in the correct order
        columns.field.onChange(newOrderedValues);
    };

    const handleLayoutChange = (newLayout) => {
        setLayout(newLayout);

        // Update form values based on the new layout
        updateFormValues(columns.field.value || [], newLayout);
    };

    // Handle checkbox value changes
    const handleCheckboxChange = (selectedValues) => {
        // Update form values based on the current layout and new selections
        updateFormValues(selectedValues, layout);
    };

    return (
        <Stack gap="3">
            <FormController
                name="widget_title"
                label="Widget Title"
                render={({ field }) => <Input size="sm" placeholder="Widget Title" type="text" {...field} />}
            />
            <Fieldset.Root invalid={!!errors.columns}>
                <Fieldset.Legend>Select Columns</Fieldset.Legend>
                <CheckboxGroup
                    invalid={!!errors.columns}
                    value={columns.field.value}
                    onValueChange={handleCheckboxChange}
                    name={columns.field.name}
                    my="0"
                    mx="0"
                >
                    <ResponsiveGridLayout
                        className="layout"
                        layouts={{ lg: layout }}
                        breakpoints={{ lg: 1200 }}
                        cols={{ lg: 12 }}
                        rowHeight={12}
                        containerPadding={[0, 10]}
                        onLayoutChange={handleLayoutChange}
                        isDraggable={true}
                        verticalCompact
                        isResizable={false}
                        useCSSTransforms={true}
                        draggableHandle=".drag-handle"
                        // measureBeforeMount={true}
                    >
                        {columnsList.map((item) => (
                            <FlexContainer key={item.value} alignItems="center" w="100%">
                                <BoxContainer py="2" pr="2" className="drag-handle" cursor="grab">
                                    <MdDragIndicator />
                                </BoxContainer>
                                <BoxContainer flex="1">
                                    <CheckboxCard p={2} size="sm" variant="surface" value={item.value} label={item.label} />
                                </BoxContainer>
                            </FlexContainer>
                        ))}
                    </ResponsiveGridLayout>
                </CheckboxGroup>

                {errors.columns && <Fieldset.ErrorText fontSize="xs">{errors.columns.message}</Fieldset.ErrorText>}
            </Fieldset.Root>
        </Stack>
    );
}

export default TableWidgetConfig;
