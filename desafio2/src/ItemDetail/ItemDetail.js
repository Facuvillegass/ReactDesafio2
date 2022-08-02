
function ItemDetail ({id,name,description,price,img}) {
    

    return (
        <div className="itemProductStyle">
            <h2>{name}</h2>
            <img className = "imgProductList" src={img} alt=""/>
            <p>{description}</p>
            <p>${price}</p>
            <button>Buy it right now!</button>
        </div>
    )
}

export default ItemDetail