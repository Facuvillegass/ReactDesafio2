import "./ItemProduct.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemProduct ({id,name,description,price,img}) {

    return (
        <div className="itemProductStyle">
            <h2>{name}</h2>
            <img className = "imgProductList" src= {img} alt=""/>
            <ItemCount />
            <p>{description}</p>
            <p>${price}</p>
            <button>Wanna know more!</button>
        </div>
    )
}

export default ItemProduct;