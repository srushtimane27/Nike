import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthContext/AuthContextComponent";

const SellerProtected = ({children}) => {
 const router = useNavigate();
 const {state} = useContext(AuthContext);


 useEffect(()=>{
    console.log(state, "State in sellerProtected")
    if(state?.user && state?.user?.role !== "seller"){
        alert("You are not allowed to access this page");
        router("/login")
    }
 },[state])
 return children;
}

export default SellerProtected;