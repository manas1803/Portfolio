import PortfolioHeader from "./shared/PortfolioHeader/PortfolioHeader";
import { PortfolioRoutes } from "./shared/Routes/PortfolioRoutes";

function App() {
  return (
    <div className="container flex box-border min-h-screen">
      <PortfolioHeader />
      <PortfolioRoutes />
    </div>
  );
}

export default App;
