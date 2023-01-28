import Cart from "../../components/Cart";
import { FormsSteps } from "../../components/forms/index";
import Header from "../../components/Header";
import Products from "../../components/Products";
import CartProvider from "../../contexts/CartContext";
import { BodyHome } from "./style";

export default function Home() {
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
