const { z } = require("zod");

export const filterSchema = z.object({
    column: z.string().min(1, { message: "Column is required" }),
    operator: z.string().min(1, { message: "Operator is required" }),
    value: z.string().min(1, { message: "Value is required" }),
});

export const tableFormSchema = z.object({
    field_source: z.string().min(1, { message: "Field source is required" }),
    widget_title: z.string().min(1, { message: "Widget title is required" }),
    columns: z.array(z.string()).min(1, { message: "Columns are required" }),
    filters: z.array(filterSchema).optional(),
});

export const tableFormDefaultValues = {
    field_source: "",
    widget_title: "",
    columns: ["column_1", "column_2"],
    filters: [],
};
