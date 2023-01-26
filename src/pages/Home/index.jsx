import Cart from "../../components/Cart";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { BodyHome } from "./style";

export default function Home() {
  return (
    <>
      <Header />
      <BodyHome>
        <Products />
        <Cart />
      </BodyHome>
    </>
  );
}
