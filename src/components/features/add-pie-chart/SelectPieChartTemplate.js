import { GridContainer, GridContainerItem } from "@/components/ui/GridContainer";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { RadioCardRoot, RadioCardTemplateItem } from "@/components/ui/radio-card";
import pieV1Dark from "../../../../public/images/chart/pie_v1_dark.png";
import pieV1Light from "../../../../public/images/chart/pie_v1_light.png";
import pieV2Dark from "../../../../public/images/chart/pie_v2_dark.png";
import pieV2Light from "../../../../public/images/chart/pie_v2_light.png";
import pieV3Dark from "../../../../public/images/chart/pie_v3_dark.png";
import pieV3Light from "../../../../public/images/chart/pie_v3_light.png";
import pieV4Dark from "../../../../public/images/chart/pie_v4_dark.png";
import pieV4Light from "../../../../public/images/chart/pie_v4_light.png";
import Image from "next/image";
import { useTheme } from "next-themes";

function SelectPieChartTemplate() {
    const { theme } = useTheme();
    const items = [
        {
            value: "1",
            template: <Image src={theme === "dark" ? pieV1Dark : pieV1Light} width="130" alt="" style={{ objectFit: "contain" }} />,
        },
        { value: "2", template: <Image src={theme === "dark" ? pieV2Dark : pieV2Light} width="130" alt="" /> },
        { value: "3", template: <Image src={theme === "dark" ? pieV3Dark : pieV3Light} width="130" alt="" /> },
        { value: "4", template: <Image src={theme === "dark" ? pieV4Dark : pieV4Light} width="130" alt="" /> },
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

export default SelectPieChartTemplate;
