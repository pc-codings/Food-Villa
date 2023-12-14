import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useState } from 'react';
import FoodItem from './FoodItem';
import { clearCart } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import confirm from '/confirmation.png';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [address, setAddress] = useState('');
    const [locality,setLocality] = useState('')
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    
    const handleLocality = (e) =>{
        setLocality(e.target.value);
    }
    const dispatch = useDispatch();

    const handleClearItem = () => {
        dispatch(clearCart());
        toast.success('Cart Cleared', {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const handleCheckout = () => {
        // Perform the checkout logic here
        // For simplicity, I'm just setting the state to indicate order placed
        dispatch(clearCart());
        setIsOrderPlaced(true);
        toast.success("Order Placed ", {
          position: toast.POSITION.TOP_CENTER
        });
    };

    const cartItems = useSelector((store) => store.cart.items);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            {!isOrderPlaced ? (
                <>
                    <div className="cart-address">
                        <h2>Delivery Address</h2>
                        <form>
                            <label>
                                Locality:
                                <input type="text" value={locality} onChange={handleLocality} />
                            </label>
                            <label>
                                LandMark:
                                <input type="text" value={address} onChange={handleAddressChange} />
                            </label>
                        </form>
                    </div>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <FoodItem key={index} {...item} />
                        ))}
                        <div className="cart-total">Total: Rupees {totalPrice / 100}</div>
                        <button className="checkout-button" onClick={handleCheckout}>
                            Checkout
                        </button>
                        <button className="checkout-button" onClick={() => handleClearItem()}>
                            Clear Cart
                        </button>
                    </div>
                </>
            ) : (
                <div className="order-success">
                    <img src={confirm}/>
                    <p>Order Placed Successfully!</p>
                    <p>Thank You for Ordering</p>
                    <Link to={'/'}><button className='app-form-button'>Home</button></Link>
                    
                    {/* Add any additional information or links for the user */}
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default Cart;
