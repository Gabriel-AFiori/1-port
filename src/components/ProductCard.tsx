type Product = {
    id: number;
    name: string;
    quantity: number;
    category: string;
  };
  
  export default function ProductCard({ product }: { product: Product }) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1rem",
          margin: "1rem",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
        }}
      >
        <h3>{product.name}</h3>
        <p>Categoria: {product.category}</p>
        <p>Quantidade em estoque: {product.quantity}</p>
      </div>
    );
  }
  
  