import {useState} from "react";

const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = (props) => {
    
    const[list, setList] = useState(toDos)

    function deleteItems(id) {
        const updatedList = list.filter((item) => item !== list[id]);
        setList(updatedList);
    }

    function deleteAll() {
        setList([]);
    }

    return (<ul className="List">
        {list.map((item, index) =>{
            return (<li id={index} className = "ListItem" key ={item}><h2>{item}<input onClick = {() => deleteItems(index)} className = "Checkbox" type="checkbox"></input></h2></li>)
        })}
        {props.AddItem(setList)}
        <button onClick = {deleteAll}>Clear All</button>
    </ul>)
}

export default List;