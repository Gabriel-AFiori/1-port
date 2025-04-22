import { createContext, useContext, useState, ReactNode } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  quantity: number;
};

type StockContextType = {
  products: Product[];
  addProduct: (product: Omit<Product, "id">) => void;
  addQuantity: (id: number, quantity: number) => void;
  removeQuantity: (id: number, quantity: number) => void;
};

const StockContext = createContext<StockContextType | undefined>(undefined);

const sampleProducts: Product[] = [
  { id: 1, name: "Teclado Mecânico", category: "Periféricos", quantity: 12 },
  { id: 2, name: "Monitor 24'", category: "Monitores", quantity: 7 },
  { id: 3, name: "Mouse Gamer", category: "Periféricos", quantity: 20 },
];

export const StockProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  const addProduct = (product: Omit<Product, "id">) => {
    const newProduct: Product = {
      ...product,
      id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    };
    setProducts((prev) => [...prev, newProduct]);
  };

  const addQuantity = (id: number, quantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + quantity }
          : product
      )
    );
  };

  const removeQuantity = (id: number, quantity: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity - quantity) }
          : product
      )
    );
  };

  return (
    <StockContext.Provider value={{ products, addProduct, addQuantity, removeQuantity }}>
      {children}
    </StockContext.Provider>
  );
};

export const useStock = () => {
  const context = useContext(StockContext);
  if (!context) throw new Error("useStock deve ser usado dentro de StockProvider");
  return context;
};
