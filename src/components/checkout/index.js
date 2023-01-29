import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutBody } from "./style";

export default function Checkout() {
  const { cart, address, orders, setOrders } = useContext(CartContext);
  const { city, street, district, number, paymentForms } = address;


  let amount = 1;
  for (let i = 0; i < cart.length; i++) {
    if (i < cart.length - 1 && cart[i].name === cart[i + 1].name) {
      amount++;
    } else {
      setOrders(...orders, { product: cart[i].name, amount: amount } )
      amount = 1;
    }
  }

  const value = cart.reduce((total, { value }) => {
    return (total += parseFloat(value));
  }, 0);


  return (
    <>
      <h1>Produtos:</h1>
      <CheckoutBody>
        {orders.map((c) => (
          <h2 key={c.product}>
            <span>{c.amount}</span> <i>{c.product}</i>
          </h2>
        ))}
      </CheckoutBody>
      <h1>Endereço:</h1>
      <CheckoutBody>
        <h2>
          Cidade: <i>{city}</i>
        </h2>
        <h2>
          Bairro: <i>{district}</i>
        </h2>
        <h2>
          Rua: <i>{street}</i>
        </h2>
        <h2>
          Numero: <i>{number}</i>
        </h2>
      </CheckoutBody>
      <h1>Pagamento:</h1>
      <CheckoutBody>
        <h2>
          Forma de pagamento: <i>{paymentForms}</i>
        </h2>
        <h2>
          Total a pagar:{" "}
          <i>
            R$
            {value.toLocaleString("pt-br", {
              minimumFractionDigits: 2,
            })}
          </i>
        </h2>
      </CheckoutBody>
    </>
  );
}
