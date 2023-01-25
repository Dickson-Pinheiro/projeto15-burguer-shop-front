import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Car from "../pages/car";
import Home from "../pages/home";
import Products from "../pages/products";
import Registration from "../pages/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/carrinho" element={<Car />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
