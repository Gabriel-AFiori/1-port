import { useStock } from "../../context/StockContext";
import { Card, Row, Col } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";
import "./Dashboard.css"; // Importando o CSS

export default function Dashboard() {
  const { products } = useStock();

  const total = products.length;
  const totalEstoque = products.reduce((acc, p) => acc + p.quantity, 0);
  const baixoEstoque = products.filter(p => p.quantity <= 5).length;

  const categoryData = products.reduce((acc: any, product) => {
    const category = product.category;
    if (!acc[category]) acc[category] = 0;
    acc[category] += product.quantity;
    return acc;
  }, {});

  const categoryChartData = Object.keys(categoryData).map(key => ({
    category: key,
    quantity: categoryData[key],
  }));

  const pieChartData = [
    { name: "Estoque Normal", value: totalEstoque - baixoEstoque },
    { name: "Baixo Estoque", value: baixoEstoque },
  ];

  return (
    <div>
      <h2 className="mb-4">Visão Geral do Estoque</h2>
      <Row>
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-3 shadow-sm rounded">
            <Card.Body>
              <Card.Title>Total de Produtos</Card.Title>
              <Card.Text>{total}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-3 shadow-sm rounded">
            <Card.Body>
              <Card.Title>Produtos em Estoque</Card.Title>
              <Card.Text>{totalEstoque}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="warning" text="dark" className="mb-3 shadow-sm rounded">
            <Card.Body>
              <Card.Title>Baixo Estoque</Card.Title>
              <Card.Text>{baixoEstoque}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h3>Quantidade de Produtos por Categoria</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantity" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>
          <h3>Distribuição de Estoque</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {pieChartData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={index === 1 ? "#ff6347" : "#4caf50"} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </div>
  );
}
