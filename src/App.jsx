import "./App.scss";
import FirstHeader from "./components/firstHeader";
import SecondHeaderV1 from "./components/secondHeaderVariant1";
import SecondHeaderV2 from "./components/secondHeaderVariant2";

function App() {
  return (
    <div className="App">
      <FirstHeader />
      <SecondHeaderV1 />
      <SecondHeaderV2 />
    </div>
  );
}

export default App;
