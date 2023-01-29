import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutBody, H1 } from "./style";

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
          <h2 key={c.name}>
            <span>{c.total}</span> {c.name}
          </h2>
        ))}
      </CheckoutBody>
      <h1>Endereço:</h1>
      <CheckoutBody>
        <h2>
          Cidade: <i>{address.cidade}</i>
        </h2>
        <h2>
          Bairro: <i>{address.bairro}</i>
        </h2>
        <h2>
          Rua: <i>{address.rua}</i>
        </h2>
        <h2>
          Numero: <i>{address.numero}</i>
        </h2>
      </CheckoutBody>
      <h1>Pagamento:</h1>
      <CheckoutBody>
        <h2>
          Forma de pagamento: <i>{address.formaDepagamento}</i>
        </h2>
        <h2>
          total a pagar:{" "}
          <i>
            R$
            {totalAmount.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </i>
        </h2>
      </CheckoutBody>
    </>
  );
}

export function Finished() {
  return <H1> Compra finalizada</H1>;
}
