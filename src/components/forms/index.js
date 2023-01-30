import { Finished, useMultStepFoms } from "./config";
import { LocationForm } from "../Location";
import Checkout from "../checkout";
import { FormsContainer, HeaderForms, BodyForms } from "./style";
import Cart from "../Cart";
import { ButtonStyled } from "../../assets/style/buttonStyled";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import useApi from "../../hooks/useApi";

const title = ["Carrinho", "Endereço", "Confirmar Compra"];

export function FormsSteps() {
  const { cart, address, orders } = useContext(CartContext);
  const { city, street, district, number, paymentForms } = address;
  const api = useApi(localStorage.getItem("token"))

  function onSubmit(e) {
    e.preventDefault();
    next();
  }

  async function postData() {
    try {
      const result = await api.checkoutPost(
        city,
        street,
        district,
        number,
        paymentForms,
        value,
        orders
      );
      if(result.success){
        next()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const value = cart.reduce((total, { value }) => {
    return (total += parseFloat(value));
  }, 0);


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
                onClick={isLastStep ? postData :(currentStep === 1 ? undefined : next)}
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
