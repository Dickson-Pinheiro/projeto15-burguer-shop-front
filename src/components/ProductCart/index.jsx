import useCart from "../../hooks/useCart";
import { DeleteButton, ImgContainer, ProductInfoContainer, StyledProductCart } from "./style";

export default function CartProduct({ product }) {
  const { image, name, type, _id } = product;
  const { deleteProduct } = useCart();
  return (
    <StyledProductCart>
      <ImgContainer>
        <img src={image} alt={name} />

      </ImgContainer>
      <ProductInfoContainer>
        <h3>{name}</h3>
        <p> {type} </p>
      </ProductInfoContainer>
      <DeleteButton onClick={() => deleteProduct(_id)}>
        Remover
      </DeleteButton>
    </StyledProductCart>
  );
}