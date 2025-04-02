import { z } from "zod";

export const settingSchema = z.object({
    dashboard_name: z.string().min(1, { message: "Name is required" }),
    refresh_interval: z.string().min(1, { message: "Refresh Interval is required" }),
    refresh_interval_unit: z.string().min(1, { message: "Refresh Interval Unit is required" }),
});

export const dashboardSettingsDefaultValues = {
    dashboard_name: "",
    refresh_interval: "10",
    refresh_interval_unit: "min",
};
