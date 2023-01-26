import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";
import Products from "../components/Products";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/carrinho" element={<Cart />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};