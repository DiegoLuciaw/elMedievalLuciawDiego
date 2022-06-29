import WidgetCarrito from '../media/widget.png';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)
    return (
        <div >
        <Link to='/cart'>
            <div>
                <li> <img src={WidgetCarrito} alt="Carrito" /> </li>
                { getQuantity() }
            </div>
        </Link>
    </div>
    )
}
export default CartWidget 