// componente que se encarga de traer los items
import { getProducts } from "../../asyncMock"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoryId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect( ()=> {
        setLoading(true)
        getProducts(categoryId).then( products =>{
            setProducts(products)
        }).finally(()=>{
            setLoading(false)
        }
        )
    }, [categoryId])
    
    console.log(products)

    if (loading){
        return <h2>Cargando</h2>
    }

    return (
        <div>
            <h2>Todos nuestros productos</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer