import { Controller, useFormContext } from "react-hook-form";
import { Field } from "../field";

export const FormController = ({ name, label = "", render, ...rest }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    return (
        <Field label={label} errorText={errors[name]?.message} invalid={!!errors[name]}>
            <Controller control={control} name={name} render={render} {...rest} />
        </Field>
    );
};
