import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './../SingleProduct.css'
import "./../shop.css"

const SingleProduct = () => {
    const [productData, setProductData] = useState();
    const { id } = useParams()

    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(response, "response")
            setProductData(response.data)
        } catch (error) {
            if (id) {
                console.log(error)
            }
        }
    }

    useEffect(() => {
        getSingleProductData()
    })


    return (
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
                        <img className="w-h-100" src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg" alt="" />
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
            

          
            <div className='single'>
               <div className='img-col'>
                   <img className='single-img' src={productData?.image} />
               </div>
                <div className='desc-col'>
                <h4 className='single-title'>{productData?.title}</h4>
                <h3 className='single-price'>MRP : ₹{productData?.price}</h3>
                <h3 className='single-desc'>{productData?.description}</h3>
                </div>
            </div>

        </div>
    )
}

export default SingleProduct