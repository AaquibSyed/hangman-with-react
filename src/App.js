import "./App.css";
import Header from "./Components/Header";
import Info from "./Components/Info";
import Input from "./Components/Input";
import Puzzle from "./Components/Puzzle";

function App() {
  return (
    <div className="app">
      <Header />
      <Puzzle />
      <Info />
      <Input />
    </div>
  );
}

export default App;
