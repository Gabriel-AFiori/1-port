import { useState } from "react";
import { useStock } from "../../context/StockContext";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";
import "./Products.css"; // Importando o CSS

export default function Products() {
  const { products, addQuantity, removeQuantity } = useStock();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleIncreaseQuantity = (id: number) => {
    addQuantity(id, 1); // Aumenta em 1
  };

  const handleDecreaseQuantity = (id: number) => {
    removeQuantity(id, 1); // Diminui em 1 (não deixa quantidade negativa)
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Produtos em Estoque</h2>

      <Form.Group className="search-container" controlId="search">
        <Form.Label>Buscar Produto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Digite o nome do produto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form.Group>

      <Row>
        {filteredProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="product-card">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2">
                  {product.category}
                </Card.Subtitle>
                <Card.Text>Quantidade em estoque: {product.quantity}</Card.Text>

                <div className="quantity-controls">
                  <Button
                    variant="outline-success"
                    className="quantity-btn increase"
                    onClick={() => handleIncreaseQuantity(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="quantity-btn decrease"
                    onClick={() => handleDecreaseQuantity(product.id)}
                  >
                    -
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
