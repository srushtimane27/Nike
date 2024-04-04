import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './../Login.css'

const Login = () => {
  const router = useNavigate();

  const [loginData, setLoginData] = useState({email: "", password: ""})
  console.log(loginData, "LOGINDATA")

  function handleChange(event){
    // console.log(event.target.value, event.target.name)
    setLoginData({...loginData, [event.target.name] : event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    if(loginData.email && loginData.password){
      try {
        const response = {data: {success : true, message:"Login Successfull"}}
        if(response.data.success === true){
          alert(response.data.message)
          setLoginData({email:"",password:""})
          router('/')
        }
      } catch (error) {
        console.log(error)
        alert(error.response.data.message)
      }
    }else{
      alert("All Fields Are Required")
    }
  }
  return (
    <div className='screen'>
      <div className='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email:</label><br />
          <input className='text' type="email" name='email' required onChange={handleChange} /><br />
          <label>Password:</label><br />
          <input className='text' type="password" name='password' required onChange={handleChange}/><br />
          <input className='login-button' type="submit" value="Login" />
        </form>

      </div>

    </div>
  )
}

export default Login