import axios from 'axios';
import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent';

const AddProduct = () => {
    const [productData, setProductData] = useState({tags:"",name: "",type: "", colour: "" })
    console.log(productData, "ProductData");

    const handleChange = (event) => {
        setProductData({...productData, [event.target.name]: event.target.value})
    }

    const { state } = useContext(AuthContext);
    console.log(state, "state");
    
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await axios.post("http://localhost:3001/api/v1/user/add-product", {productData})
            if(response.data.success){
                alert(response.data.message)
            }
        } catch (error) {
            alert(error.response.data.message);
        }
    }


  return (
    <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
            <label>Tags:</label><br />
            <input required onChange={handleChange}/><br />
            <label>Product Name:</label><br />
            <input required onChange={handleChange}/><br />
            <label>Product Type:</label><br />
            <input required onChange={handleChange}/><br />
            <label>Colour</label><br />
            <input required onChange={handleChange}/><br />
            <label>Price</label><br />
            <input required onChange={handleChange}/><br />
            <input type="submit" />
        </form>
    </div>
  )
}

export default AddProduct