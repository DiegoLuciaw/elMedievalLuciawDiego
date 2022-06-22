import { NavLink } from 'react-router-dom';
import "./navbar.css";
import CartWidget from "../CartWidget";
export default function NavBar () {
    return(
        <header>
            <div className="barnav">
                <nav className="nav-main">
                        <ul>
                        <li><NavLink to ="/">Inicio</NavLink></li>
                        <li><NavLink to ="/menu">Detalle</NavLink></li>
                        <li><NavLink to ="/category/Plato">Platos</NavLink></li>
                        <li><NavLink to ="/category/Ensalada">Ensaladas</NavLink></li>
                        <CartWidget/>
                        </ul>
                </nav>
            </div>
        </header>
    )
}

