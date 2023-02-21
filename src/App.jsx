import "./App.scss";
import { Routes, Route } from "react-router-dom";
import CurrenciesListPage from "./pages/CurrenciesListPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CurrenciesListPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
