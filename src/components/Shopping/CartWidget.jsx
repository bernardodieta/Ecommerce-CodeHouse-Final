import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IconContext } from 'react-icons'
import { HiShoppingCart } from 'react-icons/hi'
import '../pages/Layout/Layout.css'


const CartWidget = () => {
    const { cart } = useContext(CartContext);
    const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);

    return (

        <IconContext.Provider value={{ color: "withe", className: "global-class-name" }}>
           
                <div className='widget-container'>
                    Shopping Cart
                    <HiShoppingCart />
                    <span>{totalQuantity}</span>
                </div>
            
        </IconContext.Provider>

    )
}

export default CartWidget;