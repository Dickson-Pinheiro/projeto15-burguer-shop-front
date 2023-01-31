import { Finished, useMultStepFoms } from "./config";
import { LocationForm } from "../Location";
import Checkout from "../checkout";
import { FormsContainer, HeaderForms, BodyForms } from "./style";
import Cart from "../Cart";
import { ButtonsForm } from "../ButtonsForm";

const title = ["Carrinho", "Endereço", "Confirmar Compra"];

export function FormsSteps() {
  function onSubmit(e) {
    e.preventDefault();
    next();
  }

  const { steps, currentStep, step, isFirstStep, back, next, isLastStep, goTo } =
    useMultStepFoms([<Cart />, <LocationForm />, <Checkout />, <Finished />]);
  return (
    <FormsContainer onSubmit={onSubmit}>
      <HeaderForms>
        <h3>{title[currentStep]} </h3>
        {currentStep + 1 < 3 && (
          <h1>
            {currentStep + 1} / {steps.length - 1}
          </h1>
        )}
      </HeaderForms>
      <BodyForms>
        {step}
        <ButtonsForm
          currentStep={currentStep}
          back={back}
          isFirstStep={isFirstStep}
          goTo={goTo}
          isLastStep={isLastStep}
          next={next}
        />
      </BodyForms>
    </FormsContainer>
  );
}
