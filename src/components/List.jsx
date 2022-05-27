import {useState} from "react";

const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = (props) => {
    const[list, setList] = useState(toDos)

    return (<ul className="List">
        {list.map((item, index) =>{
            return (<li id={index} className = "ListItem" key ={item}><h2>{item}<input onClick = {() => props.completeItem(index)} className = "Checkbox" type="checkbox"></input></h2></li>)
        })}
        {props.AddItem(setList)}
    </ul>)
}

export default List;