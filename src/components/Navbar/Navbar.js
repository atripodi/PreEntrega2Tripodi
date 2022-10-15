import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">AT TALLER</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link to={`/category/ceramica`}><a class="nav-link" href="./shop.html">CERÁMICA</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to={`/category/enmarcados`}><a class="nav-link" href="./contact.html">ENMARCADOS</a></Link>
                        </li>
                        <li class="nav-item">
                        <Link to={`/category/cuadernos`}><a class="nav-link" href="./contact.html">CUADERNOS</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar