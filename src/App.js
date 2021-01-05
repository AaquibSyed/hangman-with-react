import "./App.css";
import { Provider } from "react-redux";
import Header from "./Components/Header/Header";
import Info from "./Components/Info/Info";
import Input from "./Components/Input/Input";
import Puzzle from "./Components/Puzzle/Puzzle";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <Puzzle />
        <Info />
        <Input />
      </div>
    </Provider>
  );
}

export default App;
