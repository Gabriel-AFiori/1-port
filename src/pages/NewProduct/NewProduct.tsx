import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStock } from "../../context/StockContext";
import { Container, Form, Button } from "react-bootstrap";
import "./NewProduct.css"; // Importando o CSS

export default function NewProduct() {
  const { addProduct } = useStock();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct({ name, category, quantity });
    navigate("/produtos");
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Adicionar Novo Produto</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            min={0}
          />
        </Form.Group>
        <Button type="submit" className="btn-primary w-100 py-2">Adicionar</Button>
      </Form>
    </Container>
  );
}
