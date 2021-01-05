import "./App.css";
import Header from "./Components/Header";
import Puzzle from "./Components/Puzzle";

function App() {
  return (
    <div className="app">
      <Header />
      <Puzzle />
      <div className="info-container">info</div>
      <div className="input-container">input</div>
    </div>
  );
}

export default App;
