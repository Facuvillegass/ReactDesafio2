import "./ItemCount.css"
import {useState} from "react"

function ItemCount () {

    const [count, setCount] = useState(1)
    

    function add () {
        setCount(count + 1)
    } 

    function substract () {
        if (count <= 1)
        {count = 1}
        setCount (count - 1)       
    }



    return (
        <div className = "ItemCountStyle">
            <button onClick={substract}>-</button>
            <p>Quantity: {count}</p>
            <button onClick={add}>+</button> 
            <div className="btnAddToCart">
            <button>Add to my Cart!</button>
            </div>
        </div>
    )
}

export default ItemCount;