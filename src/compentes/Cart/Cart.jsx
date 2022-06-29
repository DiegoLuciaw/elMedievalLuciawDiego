import { CartContext } from '../../context/CartContext';
import React, { useContext } from 'react';

const Cart = () => {

    const { cart, removeItem, clearCart, totalCost } = useContext(CartContext);
    if (cart.length === 0) {
        return <h1 className="text-center">El carrito esta vacio</h1>
    }
    return (
        <div key={cart.id}>
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
    };
        <p>Total de la compra: ${totalCost()}</p>
        <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
    )
}
export default Cart