import React, { useState } from 'react'
import './../Register.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const router = useNavigate();

  const [userData, setUserData] = useState({name:"", email: "", password:"", confirmPassword:""})
  console.log(userData, "USER DATA")

  function handleChange(event){
    // console.log(event.target.value, event.target.name)
    setUserData({...userData, [event.target.name]: event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    if(userData.name && userData.email && userData.password && userData.confirmPassword){
      if(userData.password === userData.confirmPassword){
        try {
          const response = { data : {success : true, message: "Registration Completed"}}

          if(response.data.success === true){
            alert(response.data.message)
            setUserData({name: "", email:"", password: "", confirmPassword:""})
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
        <h1>Create An Account</h1>
        <form onSubmit={handleSubmit}>
          <label>Name : </label><br />
          <input type="text" name='name' required onChange={handleChange} /><br/>
          <label>Email : </label><br />
          <input type="email" name='email' required onChange={handleChange} /><br/>
          <label>Password : </label><br />
          <input type="password" name='password' required  onChange={handleChange}/><br />
          <label>Confirm Password : </label><br />
          <input type="password" name='confirmPassword' required onChange={handleChange} /><br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register