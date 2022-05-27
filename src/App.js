
import './App.css';
import List from './components/List';
import Header from './components/Header';
import { useState } from 'react';
import Button from './components/Button';
import AddItem from './components/AddItem';


function App() {
  const [state, setState] = useState([0]);

  function completeItem(index){
    let checkStatus = [state, 1];
    if(checkStatus.includes(1)){
       document.getElementById(index).remove();
    }
  }

  function completeAll(){
    let items = document.getElementsByClassName('ListItem');
    while(items.length > 0){
      items[0].parentNode.removeChild(items[0]);
    }
  }

  return (
    <div className="App">
        <Header />
        <List state = {state} setState = {setState} completeItem = {completeItem} AddItem = {AddItem}/>
       
        <Button completeAll = {completeAll} />
    </div>
  );
}

export default App;
