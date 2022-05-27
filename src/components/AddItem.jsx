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
        <form className="Form" onSubmit={handleSubmit}>
            <label>
                <input value = {newToDo}
                    onChange={(event) => setNewToDo(event.target.value)}/>
            </label>
            <button id="AddToDo" type="submit">Add A To-Do</button>
        </form>       
    )
}

export default AddItem