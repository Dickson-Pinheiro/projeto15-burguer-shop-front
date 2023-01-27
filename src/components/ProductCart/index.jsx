import { DeleteButton, ImgContainer, ProductInfoContainer, StyledProductCart } from "./style";

export default function CartProduct({ product }) {
  const { image, name, type } = product;
  return (
    <StyledProductCart>
      <ImgContainer>
        <img src={image} alt={name} />

      </ImgContainer>
      <ProductInfoContainer>
        <h3>{name}</h3>
        <p> {type} </p>
      </ProductInfoContainer>
      <DeleteButton>
        Remover
      </DeleteButton>
    </StyledProductCart>
  );
}