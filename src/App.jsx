import "./App.scss";
import { Routes, Route } from "react-router-dom";
import CurrenciesListPage from "./page components/CurrenciesListPage";
import DetailsPage from "./page components/DetailsPage";

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
