// componente que se encarga de mostrar todos los items 

import Item from "../Item/Item"

const ItemList = ({products}) =>{
    return (
        <div>
            {products.map(prod =>
                <Item key={prod.id} prod={prod}/>
            )}
        </div>
    )
}

export default ItemList