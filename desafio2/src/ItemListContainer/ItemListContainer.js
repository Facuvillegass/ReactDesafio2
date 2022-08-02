import "./ItemListContainer.css"
import { useState, useEffect } from "react";
import products from "../utils/products.js"
import ItemList from "../ItemList/ItemList";

function ItemListContainer () {
    const [itemProducts, setItemProducts] = useState([])

    const dataPromise = new Promise ((resolve,reject) => {
        setTimeout(()=> {
            resolve(products)
        },2000)

    })

    useEffect(()=> {
        dataPromise.then ((res) => {
            setItemProducts(res)
        })
        .catch ((error)=> {
            console.log("el error es : " + error)
        })
    }, [])
   
    

    return (
        <div className = "itemProductList">
            <div>
                <ItemList dataProducts={itemProducts}/>
            </div>
        </div>
    )
}
export default ItemListContainer;