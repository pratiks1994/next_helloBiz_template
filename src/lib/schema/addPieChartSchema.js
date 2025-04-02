const { z } = require("zod");

export const filterSchema = z.object({
    column: z.string().min(1, { message: "Column is required" }),
    operator: z.string().min(1, { message: "Operator is required" }),
    value: z.string().min(1, { message: "Value is required" }),
});

export const pieChartFormSchema = z
    .object({
        field_source: z.string().min(1, { message: "Field source is required" }),
        template: z.string().min(1, { message: "Variant is required" }),
        widget_title: z.string().min(1, { message: "Widget title is required" }),
        column: z.string().min(1, { message: "Column is required" }),
        aggregate: z.string().min(1, { message: "Aggregate is required" }),
        color: z.enum(["random", "from_field"], {
            message: "Color must be either 'random' or 'from_field'",
        }),
        // Make color_field conditionally required based on the color value
        color_field: z.string().optional(),
        filters: z.array(filterSchema).optional(),
    })
    .refine(
        (data) => {
            // If color is "from_field", color_field must be provided
            if (data.color === "from_field") {
                console.log(!!data.color_field);
                return !!data.color_field;
            }
            return true;
        },
        {
            message: "Color field is required when color is set to 'From Field'",
            path: ["color_field"], // Specify which field has the error
        }
    );

export const pieChartFormDefaultValues = {
    field_source: "",
    template: "1",
    widget_title: "",
    column: "",
    aggregate: "",
    color: "random", //random or //from_field
    filters: [],
    color_field: "",
};
