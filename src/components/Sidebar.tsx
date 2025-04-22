import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white p-3 vh-100"
      style={{ width: "250px", borderRight: "2px solid #444" }}
    >
      <h3 className="text-center text-uppercase mb-4">Menu</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link to="/" className="nav-link text-white">Dashboard</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/produtos" className="nav-link text-white">Produtos</Link>
        </li>
        <li className="nav-item mb-2">
          <Link to="/novo-produto" className="nav-link text-white">Novo Produto</Link>
        </li>
      </ul>
    </div>
  );
}
