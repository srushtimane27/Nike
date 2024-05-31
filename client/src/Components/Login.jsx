import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './../Login.css'
import axios from 'axios';
import { AuthContext } from './AuthContext/AuthContextComponent';

const Login = () => {
  const {LOGIN} = useContext(AuthContext);

  const router = useNavigate();

  const [userData, setUserData] = useState({email: "", password: ""})
  console.log(userData, "USERDATA")

  function handleChange(event){
    // console.log(event.target.value, event.target.name)
    setUserData({...userData, [event.target.name] : event.target.value})
  }

  async function handleSubmit(event){
    event.preventDefault();
    if(userData.email && userData.password){
      try {
        // const response = {data: {success : true, message:"Login Successfull"}}
        const response = await axios.post("http://localhost:3001/api/v1/user/login", {userData}, {withCredentials: true});
        if(response.data.success === true){
          LOGIN(response.data.userData)
          alert(response.data.message)
          setUserData({email:"",password:""})
          router('/')
        } else {
          alert(response.data.message)
        }
      } catch (error) {
        console.log(error)
        alert(error?.response?.data?.message)
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