import ItemDetail from "../ItemDetail/ItemDetail";
import products from "../utils/products"
import { useState, useEffect } from "react";


function ItemDetailContainer () {

    const [itemProducts, setItemProducts] = useState([])

    const dataPromise = new Promise ((resolve,reject) => {
    resolve(products)
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
        <div>
            <div className = "itemProductList">
                <div>
                    <ItemDetail name = {itemProducts[0].name} img={itemProducts[0].img} description = {itemProducts[0].description} price = {itemProducts[0].price}/>
                     
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer