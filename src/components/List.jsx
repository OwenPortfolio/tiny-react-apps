const toDos = [
    "pick up laundry", "feed the dog", "wax the car"
]

const List = () => {
   return (<ul>
        {toDos.map((item) =>{
            return (<li key ={item}><h2>{item}</h2></li>)
        })}
    </ul>)
}

export default List;