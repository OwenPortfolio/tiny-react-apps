import {useState} from "react";

// const handleSubmit = (event) => {
//     event.preventDefault();
//     setList((currList) => {
//       return [newItem, ...currList];
//     });
//     setNewItem('');
//   };



const AddItem  = (setList) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        setList((currentList) => {
            return[...currentList, newToDo]
        })
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