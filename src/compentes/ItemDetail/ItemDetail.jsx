
import ItemCount from '../ItemCount'
import "../Item/item.css"

export const ItemDetail = ({item}) => {

    return (
    
    <div className='itemfotos'>
        <h1>{item.nombre}</h1>
        <img src={item.foto} alt="Imagen" />
        <p>${item.precio}</p>
        

        <ItemCount stock={12} initial={1} />

    </div>
    )
}

