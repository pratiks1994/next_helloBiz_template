// useMultiStepForm.js
import { useState } from "react";

function useMultiStepForm({ steps, trigger }) {
    const [currentStep, setCurrentStep] = useState(0);

    const next = async () => {
        if (currentStep < steps.length - 1) {
            const isValid = await trigger(steps[currentStep].fields, { shouldFocus: true });
            if (!isValid) return false;

            setCurrentStep((current) => current + 1);
            return true;
        }
        return false;
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep((current) => current - 1);
            return true;
        }
        return false;
    };

    const goTo = (stepIndex) => {
        if (stepIndex >= 0 && stepIndex < steps.length) {
            setCurrentStep(stepIndex);
            return true;
        }
        return false;
    };

    return {
        currentStep,
        currentStepConfig: steps[currentStep],
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
        totalSteps: steps.length,
        next,
        prev,
        goTo,
    };
}

export default useMultiStepForm;
