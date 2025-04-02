import { Badge, Stat as ChakraStat, FormatNumber, Show } from "@chakra-ui/react";
import * as React from "react";

export const Stat = React.forwardRef(function Stat(props, ref) {
    const { label, value, valueText, change, formatOptions, ...rest } = props;
    return (
        <ChakraStat.Root {...rest}>
            {label && <ChakraStat.Label>{label}</ChakraStat.Label>}
            <ChakraStat.ValueText {...rest} ref={ref}>
                {valueText || (value != null && formatOptions && <FormatNumber value={value} {...formatOptions} />)}
            </ChakraStat.ValueText>
            {change != null && (
                <Badge colorPalette={change > 0 ? "green" : "red"} gap="0">
                    <Show when={change > 0} fallback={<ChakraStat.DownIndicator />}>
                        <ChakraStat.UpIndicator />
                    </Show>
                    <FormatNumber value={Math.abs(change)} style="percent" maximumFractionDigits={2} />
                </Badge>
            )}
        </ChakraStat.Root>
    );
});
