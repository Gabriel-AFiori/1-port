import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="bg-dark text-white p-3 d-flex justify-content-between align-items-center"
      style={{ borderBottom: "2px solid #444" }}
    >
      <h1 className="m-0">Controle de Estoque</h1>
      <nav>
        <ul className="d-flex list-unstyled m-0">
          <li className="ms-3"><Link to="/" className="text-white text-decoration-none">Dashboard</Link></li>
          <li className="ms-3"><Link to="/produtos" className="text-white text-decoration-none">Produtos</Link></li>
          <li className="ms-3"><Link to="/novo-produto" className="text-white text-decoration-none">Novo Produto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
