// componente para mostrar cada item dentro de ItemList

import { Link } from "react-router-dom"

const Item = ({prod}) => {
    return (
        <div>
            <h3>{prod.name}</h3>
            <h4>${prod.price}</h4>
            <Link to={`/detail/${prod.id}`}>ver detalle</Link>
        </div>
    )

}

export default Item