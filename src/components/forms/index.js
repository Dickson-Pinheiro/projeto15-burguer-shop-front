import { useMultStepFoms } from "./config";
import { LocationForm } from "../Location";
import { Checkout, Finished } from "../checkout";
import { FormsContainer, HeaderForms, BodyForms } from "./style";
import Cart from "../Cart";
import { ButtonStyled } from "../../assets/style/buttonStyled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const title = ["Carrinho", "Endereço", "Confirmar Compra"];

export function FormsSteps() {
  const { cart } = useContext(CartContext);

  function onSubmit(e) {
    e.preventDefault();
    next();
  }

  const { steps, currentStep, step, isFirstStep, back, next, isLastStep } =
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
        {currentStep + 1 < 4 && (
          <div>
            {!isFirstStep && (
              <ButtonStyled type="button" onClick={back}>
                Voltar
              </ButtonStyled>
            )}
            {cart.length ? (
              <ButtonStyled
                type={currentStep === 1 ? "submit" : "button"}
                onClick={currentStep !== 1 ? next : undefined}
              >
                {isLastStep ? "Confirmar" : "Proximo"}
              </ButtonStyled>
            ) : (
              ""
            )}
          </div>
        )}
      </BodyForms>
    </FormsContainer>
  );
}
