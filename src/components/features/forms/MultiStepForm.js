import NextButton from "@/components/ui/buttons/NextButton";
import PrevButton from "@/components/ui/buttons/PrevButton";
import SubmitButton from "@/components/ui/buttons/SubmitButton";
import FlexContainer from "@/components/ui/FlexContainer";
import useMultiStepForm from "@/lib/hooks/useMultistepFormHook";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

function MultiStepForm({ initialValue, onSubmit, formSchema, steps, formId }) {
    const methods = useForm({
        defaultValues: initialValue,
        mode: "onChange",
        resolver: zodResolver(formSchema),
    });

    const { handleSubmit, trigger } = methods;
    const { currentStepConfig, isFirstStep, isLastStep, next, prev } = useMultiStepForm({
        steps,
        trigger,
    });

    return (
        <FormProvider {...methods}>
            <form id={formId} onSubmit={handleSubmit(onSubmit)}>
                <FlexContainer gap="3" flexDirection="column" p="3">
                    {currentStepConfig.component}
                    <FlexContainer gap="1" justify="flex-end">
                        {!isFirstStep && <PrevButton onClick={prev} flexGrow={1 / 2} />}
                        {!isLastStep && <NextButton onClick={next} flexGrow={1 / 2} />}
                        {isLastStep && <SubmitButton flexGrow={1 / 2} />}
                    </FlexContainer>
                </FlexContainer>
            </form>
        </FormProvider>
    );
}

export default MultiStepForm;
