import "./App.scss";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading variant="title">Currency converter</Heading>
      <Heading variant="subtitle">Choose base currency</Heading>
    </div>
  );
}

export default App;
