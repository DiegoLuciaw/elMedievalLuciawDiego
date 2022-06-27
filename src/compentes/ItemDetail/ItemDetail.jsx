
import ItemCount from '../ItemCount'
import "../Item/item.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {

    const [cant, setCant] = useState(0);

    const onAdd = (cantidad) =>{

    setCant(cantidad);

    }

    return (
    
    <div className='itemfotos'>
        <h1>{item.nombre}</h1>
        <img src={item.foto} alt="Imagen" />
        <p>${item.precio}</p>
        

        { (cant === 0)
            ?<ItemCount onAdd={onAdd} stock={12} initial={1} />
            :<Link to="/cart">Ir al Carrito</Link>
        }


    </div>
    )
}

