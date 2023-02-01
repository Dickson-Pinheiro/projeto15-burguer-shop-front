import { BrowserRouter, Route, Routes } from "react-router-dom";
import { History } from "../pages/History";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}
