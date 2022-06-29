
import ItemCount from '../ItemCount'
import "../Item/item.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from "../../context/CartContext";

export const ItemDetail = ({ item, stock }) => {

    const { addToCart } = useContext(CartContext)

    const [cant, setCant] = useState(0);

    const onAdd = (quantity) =>{

    addToCart(item, quantity);

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

