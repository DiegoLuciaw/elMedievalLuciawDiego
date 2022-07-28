import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { createBuyOrder } from '../../services/firestore';
import CartForm from './CartForm';
import React, { useContext } from 'react';

const Cart = () => {

    const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);
    if (cart.length === 0) {
        return (
            <>
            <div>
                <h1>El carrito esta vacio</h1>
                <Link to="/">Volver al Inicio</Link>
            </div>
            </>
)
    }


    return (
        <div>
    {
        cart.map((item) => (
        <div>
            <h1>{item.nombre}</h1>
            <img src={item.foto} alt="imagen" />
            <p>${item.precio}</p>
            <button onClick={()=>{removeItem(item.id)}}>X</button>
            <p>Cantidad: {item.qty}</p>
        </div>
        ))
    }
        <p>Total de la compra: ${totalCost()}</p>
        <CartForm cart={cart} totalCost={totalCost} clearCart={clearCart} createBuyOrder={createBuyOrder}/>
    </div>
    )
}
export default Cart