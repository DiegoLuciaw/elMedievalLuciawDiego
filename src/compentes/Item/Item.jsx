
import ItemCount from '../ItemCount'
import "../Item/item.css"
import { Link } from 'react-router-dom';

const Item = ({id, foto, nombre, precio}) => {

const urlDetalle = `/item/${id}`

    return (
    
    <div className='itemfotos'>
        <h1>{nombre}</h1>
        <img src={foto} alt="Imagen" />
        <p>${precio}</p>

        <ItemCount stock={12} initial={1} />

        <Link to={urlDetalle}>
            <button>Ver Plato</button>
        </Link>

    </div>
    )
}

export default Item