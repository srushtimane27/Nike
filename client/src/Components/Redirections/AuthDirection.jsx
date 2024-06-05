import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../AuthContext/AuthContextComponent'
import { useNavigate } from 'react-router-dom'

const AuthDirection = () => {
    const router = useNavigate();
    const {state} = useContext(AuthContext);
    console.log(state, state.user === null)

    useEffect(() => {
        if(state && state?.user === null){
            alert("First Login to Access This Page")
            // return router('/login')
            router('/login')
        }else {
            router('/')
        }
    },[state]);
  return (
    <div>AuthDirection</div>
  )
}

export default AuthDirection