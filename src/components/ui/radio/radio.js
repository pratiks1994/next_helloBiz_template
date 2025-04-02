import { Radio, RadioGroup } from "../radio";

export const FormRadioGroup = ({ children, ...props }) => {
    const { field, variant = "outline", size = "sm", ...rest } = { ...props };
    return (
        <RadioGroup
            name={field.name}
            value={field.value}
            onValueChange={({ value }) => {
                field.onChange(value);
            }}
            variant={variant}
            size={size}
            {...rest}
        >
            {children}
        </RadioGroup>
    );
};

export const RadioItems = (props) => {
    const { items, field } = props;

    return items.map((item) => (
        <Radio key={item.value} value={item.value} inputProps={{ onBlur: field.onBlur }}>
            {item.label}
        </Radio>
    ));
};
