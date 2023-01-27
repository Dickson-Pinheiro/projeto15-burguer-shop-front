import { useMultStepFoms } from "./config";
import { LocationForm } from "../Location";
import { Checkout } from "../checkout";
import { FormsContainer, HeaderForms, BodyForms } from "./style";
import Cart from "../Cart";
import { ButtonStyled } from "../../assets/style/buttonStyled";

const title = ["Carrinho", "Endereço", "Compra finalizada"];

export function FormsSteps() {
  const { steps, currentStep, step, isFirstStep, back, next, isLastStep } =
    useMultStepFoms([<Cart />, <LocationForm />, <Checkout />]);
  return (
    <FormsContainer>
      <HeaderForms>
        <h3>{title[currentStep]} </h3>
        <h1>
          {currentStep + 1} / {steps.length}
        </h1>
      </HeaderForms>
      <BodyForms>
        {step}

        <div>
          {!isFirstStep && (
            <ButtonStyled type="button" onClick={back}>
              Voltar
            </ButtonStyled>
          )}
          <ButtonStyled type="button" onClick={next}>
            {isLastStep ? "Confirmar" : "Proximo"}
          </ButtonStyled>
        </div>
      </BodyForms>
    </FormsContainer>
  );
}
