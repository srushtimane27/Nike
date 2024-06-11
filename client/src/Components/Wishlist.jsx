import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent'
import axios from 'axios';

const Wishlist = () => {
    const {state} = useContext(AuthContext);

    const [wishItems, setWishItems] = useState([]);
    console.log(wishItems, "wishItems");
    const [loadingWishlist, setLoadingWishlist] = useState(true);


    useEffect(() => {
        async function fetchWishlist(){
            if(state?.user?._id){
                try {
                    const response = await axios.post('http://localhost:3001/api/v1/user/show-wishlist',
                    {
                        userId: state?.user?._id,
                    });
                    if(response.data.success){
                        setWishItems(response.data.wishlist);
                    }
                } catch (error) {
                    console.log(error)
                } finally {
                    setLoadingWishlist(false)
                }
            }
        }
    fetchWishlist()
    }, [state?.user?._id]);

    async function removeFromWishlist(productId){
        try {
            const response = await axios.post('http://localhost:3001/api/v1/user/remove-from-wishlist',
            {
                userId: state.user._id,
                productId: productId
            });
            if(response.data.success){
                setWishItems(response.data.wishlist)
            }else{
                alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div>
    <h2>Wishlisted Items</h2>
    {loadingWishlist? (
        <div>Loading Wishlist ...</div>
    ) : wishItems && wishItems.length ? (
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
            {wishItems.map((productObj) => (
                <div key={productObj._id} style={{ width: "18%", border: "2px solid black", height: "300px" }}>
                 <h3>{productObj.tags}</h3>
                 <h3>{productObj.name}</h3>
                 <h3>{productObj.type}</h3>
                 <h3>{productObj.colour}</h3>
                 <h3>{productObj.price}</h3>
                 <button onClick={()=>removeFromWishlist(productObj._id)}>Remove From Wishlist</button>
                </div>
            ))}
        </div>
    ) : (
          <div>No Item In Wishlist</div>
    )}
</div>
  )
}

export default Wishlist