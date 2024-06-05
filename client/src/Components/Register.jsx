import React, { useState } from 'react'
import './../Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const router = useNavigate();

  const [userData, setUserData] = useState({name:"", email: "", password:"", confirmPassword:"", role: "Buyer"})
  console.log(userData, "USER DATA")

  function handleChange(event){
    // console.log(event.target.value, event.target.name)
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  function handleSelect(event){
    // console.log(event.target.value)
    setUserData({...userData, ["role"]: event.target.value})
  }


  async function handleSubmit(event){
    event.preventDefault();
    if(userData.name && userData.email && userData.password && userData.confirmPassword){
      if(userData.password === userData.confirmPassword){
        try {
          // const response = { data : {success : true, message: "Registration Completed"}}
          const response = await axios.post('http://localhost:3001/api/v1/user/register', {userData}, {withCredentials: true})

          if(response.data.success === true){
            alert(response.data.message)
            setUserData({name: "", email:"", password: "", confirmPassword:"", role: "Buyer"})
            router('/login')
          }
          
        } catch (error) {
          console.log(error)
          alert(error.response.data.message)
        }

      }else{
        alert("Password and confirm password are not same")
      }

    } else {
      alert("All fields are required")
    }    
  }

  return (
    <div className='screen'>
      <div className='form'>
        <h1 className='title'>Sign in</h1>
        <form onSubmit={handleSubmit}>
          <label className='text'>Name : </label><br />
          <input className='box' type="text" name='name' required onChange={handleChange} /><br/>
          <label>Email : </label><br />
          <input className='box'  type="email" name='email' required onChange={handleChange} /><br/>
          <label>Password : </label><br />
          <input className='box'  type="password" name='password' required  onChange={handleChange}/><br />
          <label>Confirm Password : </label><br />
          <input className='box'  type="password" name='confirmPassword' required onChange={handleChange} /><br />
          <select onChange={handleSelect}>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select><br />
          <input className='button' type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register