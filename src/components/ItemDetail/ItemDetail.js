import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"


const ItemDetail = ({ id, name, category, description, price, stock }) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)
    

    const handleOnAdd = (quantity) => {
                setQuantityToAdd(quantity)
        
                const productToAdd = {
                    id, name, price, quantity
                }
                console.log(productToAdd)
        
            }

            

    return (
        <article>
           <h4> este es el detalle del item {name}</h4>
            <footer className='ItemFooter'>
                <ItemCount onAdd={handleOnAdd}/>
                <Link to='/cart'>Ver carrito</Link>
            </footer>
        </article>)
}

export default ItemDetail


