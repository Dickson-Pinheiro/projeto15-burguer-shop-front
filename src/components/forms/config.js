import { useState } from "react";
import { H1 } from "./style";

export function useMultStepFoms(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    setCurrentStep((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }
  function back() {
    setCurrentStep((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    step: steps[currentStep],
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    steps,
    goTo,
    next,
    back,
  };
}

export function Finished() {
  return <H1> Compra finalizada</H1>;
}
