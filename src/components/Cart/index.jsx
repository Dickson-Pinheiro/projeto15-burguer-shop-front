import { CartContainer, CartHeader, CartList } from "./style";

export default function Cart() {

  //TODO: Mostrar itens do carrinho
  //TODO: Tornar carrinho reponsivo

  return (
    <CartContainer>
      <CartHeader>
        <h3>Carrinho de Compras</h3>
      </CartHeader>
      <CartList>
        <h3>Sua sacola está vazia</h3>
        <p>Adicione itens</p>
      </CartList>
    </CartContainer>
  );
}
