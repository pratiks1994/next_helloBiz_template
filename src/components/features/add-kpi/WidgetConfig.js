import { FormController } from "@/components/ui/input/WidgetFormInput";
import { FormSelectContent, FormSelectRoot, FormSelectTrigger } from "@/components/ui/select/WidgetFormSelect";
import { createListCollection, Input, Stack } from "@chakra-ui/react";

const columns = createListCollection({
    items: [
        { label: "Column 1", value: "column1" },
        { label: "Column 2", value: "column2" },
        { label: "Column 3", value: "column3" },
        { label: "Column 4", value: "column4" },
    ],
});

const aggregates = createListCollection({
    items: [
        { label: "Sum", value: "sum" },
        { label: "Average", value: "average" },
        { label: "Max", value: "max" },
        { label: "Min", value: "min" },
    ],
});

function WidgetConfig() {
    return (
        <Stack gap="3">
            <FormController
                name="widget_title"
                label="Widget Title"
                render={({ field }) => <Input size="sm" placeholder="Widget Title" type="text" {...field} />}
            />

            <FormController
                name="column"
                label="Column"
                render={({ field }) => (
                    <FormSelectRoot field={field} collection={columns}>
                        <FormSelectTrigger placeholder="Select Column" />
                        <FormSelectContent collection={columns} />
                    </FormSelectRoot>
                )}
            />
            <FormController
                name="aggregate"
                label="Aggregate"
                render={({ field }) => (
                    <FormSelectRoot field={field} collection={aggregates}>
                        <FormSelectTrigger placeholder="Select Aggregate" />
                        <FormSelectContent collection={aggregates} />
                    </FormSelectRoot>
                )}
            />
        </Stack>
    );
}

export default WidgetConfig;
