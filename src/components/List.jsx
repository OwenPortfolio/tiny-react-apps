const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = () => {
   return (<ul className="List">
        {toDos.map((item) =>{
            return (<li className = "ListItem" key ={item}><h2>{item} <input className = "Checkbox" type="checkbox"></input></h2></li>)
        })}
    </ul>)
}

export default List;