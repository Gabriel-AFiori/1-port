import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="app d-flex flex-column" style={{ height: "100vh" }}>
        <Header />
        <div className="d-flex flex-grow-1">
          <Sidebar />
          <div className="page-content flex-grow-1 p-4">
            <AppRoutes />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
