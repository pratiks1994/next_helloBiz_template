import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "../select";

export const FormSelectRoot = ({ children, field, size = "sm", ...rest }) => {
    return (
        <SelectRoot
            {...field}
            name={field.name}
            value={[field.value]}
            onValueChange={({ value }) => field.onChange(value[0])}
            onInteractOutside={() => field.onBlur()}
            size={size}
            {...rest}
        >
            {children}
        </SelectRoot>
    );
};

export function FormSelectTrigger({ placeholder = "Select an option", ...rest }) {
    return (
        <SelectTrigger>
            <SelectValueText placeholder={placeholder} {...rest} />
        </SelectTrigger>
    );
}

export function FormSelectContent({ collection }) {
    return (
        <SelectContent>
            {collection.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                    {item.label}
                </SelectItem>
            ))}
        </SelectContent>
    );
}
