const { z } = require("zod");

export const filterSchema = z.object({
    column: z.string().min(1, { message: "Column is required" }),
    operator: z.string().min(1, { message: "Operator is required" }),
    value: z.string().min(1, { message: "Value is required" }),
});

export const kpiFormSchema = z.object({
    field_source: z.string().min(1, { message: "Field source is required" }),
    template: z.string().min(1, { message: "Variant is required" }),
    widget_title: z.string().min(1, { message: "Widget title is required" }),
    column: z.string().min(1, { message: "Column is required" }),
    aggregate: z.string().min(1, { message: "Aggregate is required" }),
    filters: z.array(filterSchema).optional(),
});

export const kpiFormDefaultValues = {
    field_source: "",
    template: "1",
    widget_title: "",
    column: "",
    aggregate: "",
    filters: [],
};
