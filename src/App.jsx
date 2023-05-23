import "./App.css";
import HexaColor from "./HexaColor";
import NumberContainer from "./NumberContainer";
import Population from "./Population";

function App() {
  return (
    <>
      <div className="title-container">
        <h1>30 Days Of React</h1>
        <p>Number Generator</p>
        <NumberContainer />
        <HexaColor />
        <Population />
      </div>
    </>
  );
}

export default App;
