const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = (props) => {
    return (<ul className="List">
        {toDos.map((item, index) =>{
            return (<li id={index} onClick = {() => props.completeItem(index)} className = "ListItem" key ={item}><h2>{item}<input className = "Checkbox" type="checkbox"></input></h2></li>)
        })}
    </ul>)
}

export default List;