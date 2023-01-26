import Header from "../Header";
import {
  BurguerContainer,
  ImageContainer,
  ProductsBody,
  InfosContainer,
} from "./style";
import { ButtonStyled } from "../../assets/style/buttonStyled";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;

    const promisse = axios.get(url);
    promisse.then((res) => setProducts(res.data));
    promisse.catch((err) => console.log(err.response.status));
  }, []);

  return (
    <>
      <Header />
      <ProductsBody>
        {products.map((p) => (
          <BurguerContainer>
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
