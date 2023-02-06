import { ButtonStyled } from "../../assets/style/buttonStyled";
import { ContainerButtons } from "./style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import useApi from "../../hooks/useApi";
import useCart from "../../hooks/useCart";

export function ButtonsForm({ currentStep, isFirstStep, back, next, isLastStep, goTo }) {
    const { cart, address, orders } = useContext(CartContext);
    const { city, street, district, number, paymentForms } = address;
    const api = useApi(localStorage.getItem("token"));
    const { deleteAllProducts } = useCart();

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
            if (result.success) {
                deleteAllProducts();
                next();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const value = cart.reduce((total, { value }) => {
        return (total += parseFloat(value));
    }, 0);

    if (!(currentStep + 1 <= 4)) {
        return
    }

    return (
        <ContainerButtons currentStep={currentStep}>

                {!isFirstStep ? (
                    !isLastStep ? (
                        <ButtonStyled type="button" onClick={back}>
                            Voltar
                        </ButtonStyled>)
                        : ""
                ) : ""}

                {cart.length ? (
                    !isLastStep ? (
                        <ButtonStyled
                            type={currentStep === 1 ? "submit" : "button"}
                            onClick={
                                currentStep === 2 ? postData : currentStep === 1 ? undefined : next
                            }
                        >
                            {currentStep === 2 ? "Confirmar" : "Proximo"}
                        </ButtonStyled>
                    ) : ""
                ) : (
                    ""
                )}

            {isLastStep ? <ButtonStyled
                onClick={() => goTo(0)}
            >Carrinho</ButtonStyled> : ""}
            
        </ContainerButtons>
    )
}