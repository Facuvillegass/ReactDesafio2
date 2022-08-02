import "../ItemList/ItemList.css"
import ItemProduct from "../ItemProduct/ItemProduct";

function ItemList ({dataProducts}){
    return (
        <>
            {dataProducts.map((product)=> {
                    return <ItemProduct key ={product.id} name={product.name} description={product.description} price={product.price} img={product.img} />
                })}
        </>
    )
}

export default ItemList;    