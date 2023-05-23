import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
    return (
        <div className="ContenedorItems">
            {products.map(product => <Item key={product.id} {...product}/>)}
        </div>
    )
}

export default ItemList