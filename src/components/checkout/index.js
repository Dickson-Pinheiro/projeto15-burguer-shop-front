import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutBody } from "./style";

export function Checkout() {
  const { cart, address } = useContext(CartContext);

  let checkoutCart = [];
  let total = 1;
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length - 1 && cart[i].name == cart[i + 1].name) {
      total++;
    } else {
      checkoutCart.push({ name: cart[i].name, total: total });
      total = 1;
    }
  }

  const totalAmount = cart.reduce((total, { value }) => {
    return (total += parseFloat(value));
  }, 0);

  return (
    <>
      <h1>Produtos:</h1>
      <CheckoutBody>
        {checkoutCart.map((c) => (
          <h2>
            <span>{c.total}</span> {c.name}
          </h2>
        ))}
      </CheckoutBody>
      <h1>Endereço:</h1>
      <CheckoutBody>
        <h2>
          <span>Cidade:</span> {address.cidade}
        </h2>
        <h2>
          <span>Bairro:</span> {address.bairro}
        </h2>
        <h2>
          <span>Rua:</span> {address.rua}
        </h2>
        <h2>
          <span>Numero:</span> {address.numero}
        </h2>
      </CheckoutBody>
      <h1>Pagamento:</h1>
      <CheckoutBody>
        <h2>
          <span>Forma de pagamento:</span>
          {address.formaDepagamento}
        </h2>
        <h2>
          <span>total a pagar:</span> R$
          {totalAmount.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </h2>
      </CheckoutBody>
    </>
  );
}
