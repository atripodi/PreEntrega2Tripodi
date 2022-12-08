import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                    <Link to={"/"}>AT TALLER</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to={`/category/ceramica`}>CERÁMICA</Link>
                        </li>
                        <li class="nav-item">
                        <Link to={`/category/enmarcados`}>ENMARCADOS</Link>
                        </li>
                        <li class="nav-item">
                        <Link to={`/category/cuadernos`}>CUADERNOS</Link>
                        </li>
                        <li class="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar