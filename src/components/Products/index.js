import {
  BurguerContainer,
  ImageContainer,
  ProductsBody,
  InfosContainer,
} from "./style";
import { ButtonStyled } from "../../assets/style/buttonStyled";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";

export default function Products() {
  const [products, setProducts] = useState([]);
  const api = useApi(localStorage.getItem("token"));

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await api.listProducts();
        setProducts(result.products.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <ProductsBody>
        {products.map((p) => (
          <BurguerContainer key={p._id}>
            <ImageContainer>
              <img src={p.image} alt="" />
            </ImageContainer>
            <InfosContainer>
              <h1>{p.name}</h1>
              <h2>{p.description}</h2>
              <p>R$ {p.value}</p>
              <ButtonStyled>Adicionar</ButtonStyled>
            </InfosContainer>
          </BurguerContainer>
        ))}
      </ProductsBody>
    </>
  );
}
