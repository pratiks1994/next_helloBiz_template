import { FormController } from "@/components/ui/input/WidgetFormInput";
import { FormSelectContent, FormSelectRoot, FormSelectTrigger } from "@/components/ui/select/WidgetFormSelect";
import { createListCollection } from "@chakra-ui/react";
import React from "react";

const sources = createListCollection({
    items: [
        { label: "Source 1", value: "source1" },
        { label: "Source 2", value: "source2" },
        { label: "Source 3", value: "source3" },
        { label: "Source 4", value: "source4" },
    ],
});

function SelectSource() {
    return (
        <FormController
            name="field_source"
            label="Data Source"
            render={({ field }) => (
                <FormSelectRoot field={field} collection={sources}>
                    <FormSelectTrigger placeholder="Select Data Source" />
                    <FormSelectContent collection={sources} />
                </FormSelectRoot>
            )}
        />
    );
}

export default SelectSource;
