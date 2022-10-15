//componente que se encarga de traer los items desde ayncMock

import { useEffect, useState } from "react"
import { getProduct } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {

    const [product, setProduct] =useState ({})
    const [loading, setLoading] = useState(true)
    const {productId} = useParams()

    console.log(productId)

    useEffect(()=>{
        getProduct(productId).then(product =>{
            setProduct(product)
            console.log(product)
        }).finally(()=> {
            setLoading(false)
        })
    },[])

    console.log(product)

    if(loading){
        return <h1>Cargando</h1>
    }

    return (
        <div>
            <h1>Detalle de producto</h1>
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer