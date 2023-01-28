import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { FormsSteps } from "../../components/forms/index";
import Header from "../../components/Header";
import Products from "../../components/Products";
import CartProvider from "../../contexts/CartContext";
import { BodyHome } from "./style";

export default function Home() {
  const api = useApi(localStorage.getItem("token"))
  const navigate = useNavigate()

  useEffect(() => {
    async function validToken() {
      const result = await api.verifyToken(localStorage.getItem("token"))
      console.log(result.validationToken.data.valid)
      if (!result.validationToken.data.valid) {
        navigate("/")
      }
      return
    }
    validToken()
  }, [])

  return (
    <CartProvider>
      <Header />
      <BodyHome>
        <Products />
        <FormsSteps />
      </BodyHome>
    </CartProvider>
  );
}
