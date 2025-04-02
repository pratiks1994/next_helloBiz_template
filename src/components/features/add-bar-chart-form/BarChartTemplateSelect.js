import { GridContainer, GridContainerItem } from "@/components/ui/GridContainer";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { RadioCardRoot, RadioCardTemplateItem } from "@/components/ui/radio-card";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import barchartV1Dark from "../../../../public/images/chart/barchart_v1_dark.png";
import barchartV1Light from "../../../../public/images/chart/barchart_v1_light.png";
import barchartV2Dark from "../../../../public/images/chart/barchart_v2_dark.png";
import barchartV2Light from "../../../../public/images/chart/barchart_v2_light.png";
import barchartV3Dark from "../../../../public/images/chart/barchart_v3_dark.png";
import barchartV3Light from "../../../../public/images/chart/barchart_v3_light.png";

function BarChartTemplateSelect() {
    const { theme } = useTheme();

    const items = [
        {
            value: "1",
            template: <Image src={theme === "dark" ? barchartV1Dark : barchartV1Light} width="200" height="100" alt="" />,
        },
        {
            value: "2",
            template: <Image src={theme === "dark" ? barchartV2Dark : barchartV2Light} width="200" height="100" alt="" />,
        },
        {
            value: "3",
            template: <Image src={theme === "dark" ? barchartV3Dark : barchartV3Light} width="200" height="100" alt="" />,
        },
    ];

    return (
        <FormController
            name="template"
            label="Select Template"
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
                            <GridContainerItem colSpan={24} p="0" key={item.value}>
                                <RadioCardTemplateItem key={item.value} value={item.value}>
                                    {item.template}
                                </RadioCardTemplateItem>
                            </GridContainerItem>
                        ))}
                    </GridContainer>
                </RadioCardRoot>
            )}
        />
    );
}

export default BarChartTemplateSelect;
