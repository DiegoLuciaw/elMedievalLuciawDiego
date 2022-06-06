import "./navbar.css";
export default function NavBar () {
    return(
        <header>
            <div className="barnav">
                <nav className="nav-main">
                        <ul>
                            <li><a href="home">Home</a></li>
                            <li><a href="restaurante">Restaurante</a></li>
                            <li><a href="cocina">Cocino</a></li>
                            <li><a href="contacto">Contacto</a></li>
                        </ul>
                </nav>
            </div>
        </header>
    )
}