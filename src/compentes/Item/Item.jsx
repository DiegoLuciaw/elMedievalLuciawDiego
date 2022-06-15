
import ItemCount from '../ItemCount'
import "../Item/item.css"

const Item = ({foto, nombre, precio}) => {
    return (
    
    <div className='itemfotos'>
        <h1>{nombre}</h1>
        <img src={foto} alt="Imagen" />
        <p>${precio}</p>
        

        <ItemCount stock={12} initial={1} />

    </div>
    )
}

export default Item