import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const [state] = useState([0]);

  return (
    <div className="App">
      <Header/>
      <List state={state} AddItem={AddItem} />
    </div>
  );
}

export default App;
