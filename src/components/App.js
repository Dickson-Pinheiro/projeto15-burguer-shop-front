import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../assets/style/GlobalStyle";
import Car from "../pages/car";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Registration from "../pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/cadastro" element={<Registration />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/carrinho" element={<Car />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
