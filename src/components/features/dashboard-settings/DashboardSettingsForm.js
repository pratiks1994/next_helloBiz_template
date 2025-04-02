"use client";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import { Field } from "@/components/ui/field";
import FlexContainer from "@/components/ui/FlexContainer";
import { InputGroup } from "@/components/ui/input-group";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { NativeSelectOptions, NativeSelectRoot } from "@/components/ui/select/NativeSelect";
import { routes } from "@/lib/route";
import { settingSchema } from "@/lib/schema/dashboardSettingsSchema";
import { selectDashboardSettings, setDashboardSettings } from "@/lib/slices/dashboardSlice";
import { createListCollection, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const intervals = createListCollection({
    items: [
        { label: "Min", value: "min" },
        { label: "Hour", value: "hour" },
        { label: "Day", value: "day" },
    ],
});

function DashboardSettingsForm() {
    const dashboardSettings = useSelector(selectDashboardSettings);
    const router = useRouter();
    const methods = useForm({
        defaultValues: dashboardSettings,
        mode: "onChange",
        resolver: zodResolver(settingSchema),
    });
    const dispatch = useDispatch();

    const onFinish = (data) => {
        dispatch(setDashboardSettings(data));
        router.push(routes.create_dashboard);
    };

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    return (
        <FormProvider {...methods}>
            <form id="dashboard-settings-form" onSubmit={handleSubmit(onFinish)}>
                <FlexContainer gap="3" flexDirection={"column"} p="3">
                    <FormController
                        name="dashboard_name"
                        label="Dashboard Name"
                        render={({ field }) => <Input size="sm" placeholder="Dashboard Name" type="text" {...field} />}
                    />

                    <Field
                        label="Refesh Interval"
                        errorText={errors.refresh_interval?.message || errors.refresh_interval_unit?.message}
                        invalid={!!errors.refresh_interval || !!errors.refresh_interval_unit}
                    >
                        <InputGroup
                            flex="1"
                            endElement={
                                <NativeSelectRoot size="xs" variant="plain" width="auto" me="-1">
                                    <NativeSelectOptions options={intervals} {...register("refresh_interval_unit")} />
                                </NativeSelectRoot>
                            }
                            w="full"
                        >
                            <Input size="sm" pe="0" placeholder="Refresh Interval" type="number" {...register("refresh_interval")} />
                        </InputGroup>
                    </Field>

                    <FlexContainer gap="1" justify="flex-end">
                        <SubmitButton flexGrow={1 / 2} />
                    </FlexContainer>
                </FlexContainer>
            </form>
        </FormProvider>
    );
}

export default DashboardSettingsForm;
