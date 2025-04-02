const { z } = require("zod");

export const filterSchema = z.object({
    column: z.string().min(1, { message: "Column is required" }),
    operator: z.string().min(1, { message: "Operator is required" }),
    value: z.string().min(1, { message: "Value is required" }),
});

export const barChartFormSchema = z
    .object({
        field_source: z.string().min(1, { message: "Field source is required" }),
        template: z.string().min(1, { message: "Variant is required" }),
        widget_title: z.string().min(1, { message: "Widget title is required" }),
        x_column: z.string().min(1, { message: "X Column is required" }),
        y_column: z.string().min(1, { message: "Y Column is required" }),
        aggregate: z.string().min(1, { message: "Aggregate is required" }),
        color: z.string().min(1, { message: "Color is required" }),
        color_field: z.string().optional(),
        filters: z.array(filterSchema).optional(),
    })
    .refine(
        (data) => {
            // If color is "from_field", color_field must be provided
            if (data.color === "from_field") {
                return !!data.color_field;
            }
            return true;
        },
        {
            message: "Color field is required when color is set to 'From Field'",
            path: ["color_field"], // Specify which field has the error
        }
    );

export const barChartFormDefaultValues = {
    field_source: "",
    template: "1",
    widget_title: "",
    x_column: "",
    y_column: "",
    aggregate: "",
    color_field: "",
    color: "random",
    filters: [],
};
