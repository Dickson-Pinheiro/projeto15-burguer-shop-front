import { CartContainer, CartHeader, CartList } from "./style";

export default function Cart() {
  //TODO: Mostrar itens do carrinho
  //TODO: Tornar carrinho reponsivo

  return (
    <CartContainer>
      <CartList>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </CartList>
    </CartContainer>
  );
}
