"use client";
import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import FlexContainer from "@/components/ui/FlexContainer";
import { InputGroup } from "@/components/ui/input-group";
import { FormController } from "@/components/ui/input/WidgetFormInput";
import { NativeSelectOptions, NativeSelectRoot } from "@/components/ui/select/NativeSelect";
import { routes } from "@/lib/route";
import { dashboardSettingsDefaultValues, settingSchema } from "@/lib/schema/dashboardSettingsSchema";
import { setDashboardSettings } from "@/lib/slices/dashboardSlice";
import { Button, createListCollection, Input } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const intervals = createListCollection({
    items: [
        { label: "Min", value: "min" },
        { label: "Hour", value: "hour" },
        { label: "Day", value: "day" },
    ],
});

function InitiateDashboardForm() {
    const dispatch = useDispatch();
    const methods = useForm({
        defaultValues: dashboardSettingsDefaultValues,
        mode: "onChange",
        resolver: zodResolver(settingSchema),
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onFinish = (data) => {
        dispatch(setDashboardSettings(data));
        redirect(routes.create_dashboard);
    };
    return (
        <>
            <DialogHeader>
                <DialogTitle fontSize="lg">Create Dashboard</DialogTitle>
            </DialogHeader>
            <FormProvider {...methods}>
                <form id="initialte-dashboard-form" onSubmit={handleSubmit(onFinish)}>
                    <DialogBody>
                        <FlexContainer gap="3" flexDirection={"column"} px="1">
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
                                        <NativeSelectRoot size="xs" variant="plain" me="-1">
                                            <NativeSelectOptions options={intervals} {...register("refresh_interval_unit")} />
                                        </NativeSelectRoot>
                                    }
                                    w="full"
                                >
                                    <Input
                                        size="sm"
                                        pe="0"
                                        min={1}
                                        placeholder="Refresh Interval"
                                        type="number"
                                        {...register("refresh_interval")}
                                    />
                                </InputGroup>
                            </Field>
                        </FlexContainer>
                    </DialogBody>
                    <DialogFooter>
                        <DialogActionTrigger asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogActionTrigger>
                        <Button type="submit">Create</Button>
                    </DialogFooter>
                    <DialogCloseTrigger />
                </form>
            </FormProvider>
        </>
    );
}

export default InitiateDashboardForm;
