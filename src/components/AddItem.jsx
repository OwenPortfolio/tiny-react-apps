import {useState} from "react";

const AddItem  = (setList) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        setList((currentList) => {
            return[...currentList, newToDo]
        })
        setNewToDo("")
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