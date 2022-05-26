
import './App.css';
import List from './components/List';
import Header from './components/Header';
import { useState } from 'react';
import * as ReactDOM from 'react-dom'
// import Checkbox from './components/Checkbox';

const list = document.getElementsByClassName("List")
const item = document.getElementById('0')

function App() {
  const [state, setState] = useState([0]);
  function completeItem(){
    let checkStatus = [state, 1];
    if(checkStatus.includes(1)){
      let garbage = list.removeChild(item)
      console.log(garbage)
    }
  }
  return (
    <div className="App">
        <Header />
        <List state = {state} setState = {setState} completeItem = {completeItem} />
    </div>
  );
}

export default App;
