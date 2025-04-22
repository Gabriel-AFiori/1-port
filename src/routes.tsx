import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Products from "./pages/Product/Products";
import NewProduct from "./pages/NewProduct/NewProduct";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/novo-produto" element={<NewProduct />} />
    </Routes>
  );
}
