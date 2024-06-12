import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import "./../shop.css"
import "./../Script.js";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext/AuthContextComponent.js';


const Shop = () => {
  const {state} = useContext(AuthContext);
  const router = useNavigate();

  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);

  async function getProducts(){
    try {
      // const response = await axios.get('https://fakestoreapi.com/products');
      const response = await axios.get('http://localhost:3001/api/v1/product/get-all-products')
      if(response?.data.success){
        setAllProducts(response.data.products)
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  async function addToCart(productId){
    console.log(state, "state?.user?._id")
    if(state?.user?._id === undefined){
      alert("Please first login to add product into cart")
      router("/login")
    }
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/add-to-cart',
      {
        userId: state?.user?._id,
        productId: productId,
      });
      if(response.data.success){
        alert.success(response.data.message)
       }
      } catch (error) {
      console.log(error)
    }
  }

  async function addToWishlist(productId){
    console.log(state, "state?.user?._id")
    if(state?.user?._id === undefined){
      alert("Please first login to add product into wishlist")
      router("/login")
    }
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/add-to-wishlist',
      {
        userId: state?.user?._id,
        productId: productId,
      });
      if(response.data.success){
        alert.success(response.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }


  // async function redirect(id){
  //   router(`/single-product/${id}`)
  // }

  async function cartRedirect(){
    router(`/cart`)
  }

  async function wishlistRedirect(){
    router(`/wishlist`)
  }

 
  useEffect(()=>{
    getProducts()
  }, [])


  return (
    <div>
      <div className='screen'>
        <div className='nav-bar'>
          <div className='nav-one'>
            <div className='nav-one-right'>
              <h5>Find a Store |</h5>
              <h5>Help |</h5>
              <h5>Join Us |</h5>
              <h5>Sign In</h5>
            </div>
          </div>

          <div className='nav-two'>
          <div id="nav-two-left">
                <img className="w-h-100" src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg" alt='nike' />
            </div>
            <div id="nav-two-mid">
                <div>New & Featured</div>
                <div>Men</div>
                <div>Women</div>
                <div>Kids</div>
                <div>Sale</div>
                <div>Customise</div>
                <div>SNKRS</div>
            </div>
            <div onClick={()=>wishlistRedirect()}>Wishlist</div>
            <div onClick={()=>cartRedirect()}>Your Cart</div>
            <div id='nav-two-right'><h3>Welcome - {state?.user?.name}</h3></div>
          </div>

        </div>

        <div className='Nike-pegasus'>
          <div className='line-one'>Shoes/Nike Pegasus</div>
          <div className='line-two'>
            <div className='line-two-left'>Women's Nike Pegasus Shoes(49)</div>
            <div className='line-two-right'>
              <div>Hide Filters</div>
              <div>Sort By</div>
            </div>
          </div>
        </div>

        <div className='products'>
          <div className='Side-bar'>
            <div className='side-first'>
              <div className='lifestyle'>Lifestyle</div>
              <div className='running'>Running</div>
            </div>
            <div className='side-second'>
              <div>Gender</div>
              <div>Shop By Price</div>
              <div>Sale & Offer</div>
              <div>Size</div>
              <div>Colour</div>
              <div>Shoe Height</div>
              <div>Brand</div>
              <div>Collections</div>
              <div>Widths</div>
              <div>Sports</div>
            </div>
          </div>
          {allProducts?.length? 
             <div className='all-products'>
              {allProducts.map((productObj) => (
                // onClick={()=>redirect(productObj.id)}
                <div className='single-product'>
                  <div className='img'></div>
                  <div className='pro-info'>
                  <div className='tags'>{productObj.tags}</div>
                  <div className='name'>{productObj.name}</div>
                  <div className='type'>{productObj.type}</div>
                  <div className='colour'>{productObj.colour}</div>
                  <div className='price'>MRP: {productObj.price}</div>
                  <button className='cart' onClick={()=>addToCart(productObj?._id)}>Add To Cart</button><br />
                  <button className='wish' onClick={()=>addToWishlist(productObj?._id)}>Add To Wishlist</button><br />
                  </div>
                </div>
              ))}
             </div> : <div>Loading...</div>}
             
        </div>

      </div>
    </div>
  )
}

export default Shop