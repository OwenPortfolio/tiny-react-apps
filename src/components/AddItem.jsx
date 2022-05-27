import {useState} from "react";

// const handleSubmit = (event) => {
//     event.preventDefault();
//     setList((currList) => {
//       return [newItem, ...currList];
//     });
//     setNewItem('');
//   };



const AddItem  = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(newToDo)
        document.getElementsByClassName("List").appendChild(<li className = "ListItem" key ={newToDo}><h2>{newToDo}<input className = "Checkbox" type="checkbox"></input></h2></li>)
    }
    const [newToDo, setNewToDo] = useState('');
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add a To-Do:
                <input value = {newToDo}
                    onChange={(event) => setNewToDo(event.target.value)}/>
            </label>
            <button type="submit">Add To-Do</button>
        </form>       
    )
}

export default AddItem