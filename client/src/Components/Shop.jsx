import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./../shop.css"
import "./../Script.js";
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const router = useNavigate();

  const [allProducts, setAllProducts] = useState([]);

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

  async function redirect(id){
    router(`/single-product/${id}`)
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
          </div>

        </div>

        <div className='products'>
          {allProducts?.length? 
             <div className='all-products'>
              {allProducts.map((productObj) => (
                <div onClick={()=>redirect(productObj.id)} className='single-product'>
                  <h3>{productObj.tags}</h3>
                  <h3>{productObj.name}</h3>
                  <h3>{productObj.type}</h3>
                  <h3>{productObj.colour}</h3>
                  <h3>{productObj.price}</h3>
                </div>
              ))}
             </div> : <div>Loading...</div>}
        </div>

      </div>
    </div>
  )
}

export default Shop