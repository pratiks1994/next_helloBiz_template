import { RadioCard } from "@chakra-ui/react";
import * as React from "react";

export const RadioCardItem = React.forwardRef(function RadioCardItem(props, ref) {
    const {
        inputProps,
        label,
        description,
        addon,
        icon,
        indicator = <RadioCard.ItemIndicator />,
        indicatorPlacement = "end",
        ...rest
    } = props;

    const hasContent = label || description || icon;
    const ContentWrapper = indicator ? RadioCard.ItemContent : React.Fragment;

    return (
        <RadioCard.Item {...rest}>
            <RadioCard.ItemHiddenInput ref={ref} {...inputProps} />
            <RadioCard.ItemControl>
                {indicatorPlacement === "start" && indicator}
                {hasContent && (
                    <ContentWrapper>
                        {icon}
                        {label && <RadioCard.ItemText>{label}</RadioCard.ItemText>}
                        {description && <RadioCard.ItemDescription>{description}</RadioCard.ItemDescription>}
                        {indicatorPlacement === "inside" && indicator}
                    </ContentWrapper>
                )}
                {indicatorPlacement === "end" && indicator}
            </RadioCard.ItemControl>
            {addon && <RadioCard.ItemAddon>{addon}</RadioCard.ItemAddon>}
        </RadioCard.Item>
    );
});

export const RadioCardTemplateItem = ({ children, ref, ...props }) => {
    const { inputProps, ...rest } = props;

    return (
        <RadioCard.Item {...rest}>
            <RadioCard.ItemHiddenInput ref={ref} {...inputProps} />
            <RadioCard.ItemControl p="1">{children}</RadioCard.ItemControl>
        </RadioCard.Item>
    );
};

export const RadioCardRoot = RadioCard.Root;
export const RadioCardLabel = RadioCard.Label;
export const RadioCardItemIndicator = RadioCard.ItemIndicator;
