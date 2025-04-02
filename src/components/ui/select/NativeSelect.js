import { NativeSelect } from "@chakra-ui/react";

export const NativeSelectRoot = ({ children, ...props }) => {
    return (
        <NativeSelect.Root {...props}>
            {children} <NativeSelect.Indicator />
        </NativeSelect.Root>
    );
};

export const NativeSelectOptions = (props) => {
    const { options, ...rest } = props;
    return (
        <NativeSelect.Field {...rest}>
            {options.items.map((interval) => (
                <option key={interval.value} value={interval.value}>
                    {interval.label}
                </option>
            ))}
        </NativeSelect.Field>
    );
};
