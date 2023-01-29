import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import useCart from "../../hooks/useCart";
import CartProduct from "../ProductCart";
import {
  CartContainer,
  CartList,
  DeleteAllButton,
  TotalContainer,
} from "./style";

export default function Cart() {
  const token = localStorage.getItem("token");
  const { showCartProducts } = useApi(token);
  const { cart, deleteAllProducts } = useCart();
  const totalAmount = cart.reduce((total, { value }) => {
    return (total += parseFloat(value));
  }, 0);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const { success, cartProducts, error } = await showCartProducts();
  //     if (!success) {
  //       return console.log(error);
  //     }
  //     setCartProducts(cartProducts);
  //   };

  //   getProducts();
  // }, []);

  //TODO: Tornar carrinho reponsivo

  return (
    <CartContainer>
      <CartList>
        {cart.length === 0 ? (
          <>
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </>
        ) : (
          <>
            {cart.map((product, idx) => (
              <CartProduct product={product} key={idx} />
            ))}
            <TotalContainer>
              <strong>Total</strong>
              <p>
                R$
                {totalAmount.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </TotalContainer>
            <DeleteAllButton type="button" onClick={deleteAllProducts}>
              Remover Todos
            </DeleteAllButton>
          </>
        )}
      </CartList>
    </CartContainer>
  );
}
