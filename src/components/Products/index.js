import {
  BurguerContainer,
  ImageContainer,
  ProductsBody,
  InfosContainer,
} from "./style";
import { ButtonStyled } from "../../assets/style/buttonStyled";
import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

export default function Products() {
  const [products, setProducts] = useState([]);
  const api = useApi(localStorage.getItem("token"));
  const navigate = useNavigate();
  const { addProduct } = useCart();

  useEffect(() => {
    async function getProducts() {
      try {
        const result = await api.listProducts();
        setProducts(result.products.data);
      } catch (error) {
        console.log(error);
        navigate("/login");
      }
    }
    getProducts();
  }, []);

  async function postId(prodId) {
    try {
      const cartUser = await api.addProductToCartById(prodId);
      console.log(cartUser, prodId, "ok");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProductsBody>
      {products.map((p) => (
        <BurguerContainer key={p._id}>
          <ImageContainer>
            <img src={p.image} alt="" />
          </ImageContainer>
          <InfosContainer>
            <h1>{p.name}</h1>
            <h2>{p.description}</h2>
            <p>R$ {p.value.toFixed(2)}</p>
            <ButtonStyled onClick={() => addProduct(p._id)}>Adicionar</ButtonStyled>
          </InfosContainer>
        </BurguerContainer>
      ))}
    </ProductsBody>
  );
}
