const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = (props) => {
    return (<ul className="List">
        {toDos.map((item, index) =>{
            return (<li id={index} className = "ListItem" key ={item}><h2>{item}<input onClick = {() => props.completeItem(index)} className = "Checkbox" type="checkbox"></input></h2></li>)
        })}
        {props.AddItem()}
    </ul>)
}

export default List;