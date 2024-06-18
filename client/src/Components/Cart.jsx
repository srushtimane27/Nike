import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent'
import axios from 'axios';
import "./../cart.css"

const Cart = () => {
    const { state } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loadingCart, setLoadingCart] = useState(true);

    useEffect(() => {
        async function fetchCart(){
            if(state?.user?._id){
                try {
                    const response = await axios.post('http://localhost:3001/api/v1/user/show-cart',
                    {
                       userId: state?.user?._id,                    
                    });
                    if(response.data.success){
                        setCartItems(response.data.cart);
                    }
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoadingCart(false);
                }
            }
        }
        fetchCart();
    }, [state?.user?._id]);

    async function removeFromcart(productId){
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/remove-cart',
            {
                userId: state.user._id,
                productId: productId
            });
            if(response.data.success){
                setCartItems(response.data.cart);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="cart-container">
            <h2>Cart Items</h2>
            {loadingCart ? (
                <div className="loading-cart">Loading Cart ...</div>
            ) : cartItems.length ? (
                <div className="cart-items">
                    {cartItems.map((productObj) => (
                        <div key={productObj._id} className="cart-item">
                            <h3>{productObj.tags}</h3>
                            <h3>{productObj.name}</h3>
                            <h3>{productObj.type}</h3>
                            <h3>{productObj.colour}</h3>
                            <h3>{productObj.price}</h3>
                            <button onClick={() => removeFromcart(productObj._id)}>Remove Item From Cart</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="no-items">No Item In Cart</div>
            )}
        </div>
    );
}

export default Cart;