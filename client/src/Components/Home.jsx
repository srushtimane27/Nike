import React, { useContext } from 'react'
import "./../Home.css";
import "./../Script.js";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext/AuthContextComponent.js';
import axios from 'axios';

const Home = () => {
    const router = useNavigate();
    const registerPage = useNavigate();
    const loginPage = useNavigate();
    const {state, LOGOUT} = useContext(AuthContext);

    console.log(state, "state")

    async function redirect(){
        router(`/shop`)
    }

    async function registerRedirect(){
        registerPage(`/register`)
    }
    async function loginRedirect(){
        loginPage(`/login`)
    }

    async function Logout(){
        try {
            const response = await axios.get('http://localhost:3001/api/v1/user/logout')
            if(response.data.success){
                LOGOUT();
                alert.success(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <div id="screen">
        <div id="nav-bar">
        <div id="nav-one">
            <div id="nav-one-right">
            <div>Find a Store |</div>
            <div>Help |</div>
            <div>Join Us |</div>
            <div onClick={()=>registerRedirect()}>Sign In |</div>
            {state?.user?.role? <div onClick={Logout}>Logout</div> : <div onClick={()=>loginRedirect()}>Login</div>}      
            </div>
        </div>
        <div id="nav-two">
            <div id="nav-two-left">
                <img className="w-h-100" src="https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-preview.jpg" alt=""/>
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
            <div id="nav-two-right">
                 <div><i className="fa-solid fa-magnifying-glass"></i></div>
                 <div><i className="fa-regular fa-heart"></i></div>
                 <div><i className="fa-solid fa-cart-shopping"></i></div>
                 <h3 id='user-name'>Welcome - {state?.user?.name}</h3>
            </div>
        </div>
        <div id="nav-three">
            <div id="nav-three-text">
                <div id="first-line">Hello Nike App</div>
                <div id="second-line">Download the app to access everything Nike. Get Your Great</div>
            </div>
        </div>
    </div>
        <div id="first-gift-img">
            <div id="gift-img">
               <img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/045de467-fbd2-403e-bdf5-4d6895aee470/nike-just-do-it.png" alt=""/>
            </div>
        </div>
        <div id="gift-desc">
            <div id="gift-first-line">GIFTS THAT MOVE YOU</div>
            <div id="gift-second-line">This years gift. Next years greatness.</div>
            <div id="gift-third-line">
                <div id="third-line-button">
                <button onClick={()=>redirect()} id="button-one-shopexp">Shop</button>
                </div>
            </div>
        </div>
        <div id="feat-shop">
            <div id="featured">Featured</div>
        </div>
        <div id="featured-img">
            <div id="img-box">
            <div className="featured-img-line">
                <img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/555b9dfd-2687-4b25-987b-4a9f51d83062/image.png" alt=""/>
            </div>
            <div className="featured-img-line">
                <img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/4cc7c647-9ec9-4de8-bafa-4e82fc790d73/nike-just-do-it.png" alt=""/>
            </div>
            <div className="featured-img-line">
                <img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/fcdeb56e-a81a-4a94-8fd3-46a37cc3f967/nike-just-do-it.png" alt=""/>
            </div>
            </div>
            <div>
            <div id="img-names">
                <div id="names">
                    <div>Most-Wanted Styles</div>
                    <div>Accessories</div>
                    <div>Matching Sets</div>
                </div>
            </div>
            </div>
            <div id="trending-container">
            <div id="trending">
                <div id="trending-word">Trending</div>
            </div>
           </div>
           <div id="image-container">
                <div id="image-box">
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/ce9d486e-ffde-4b22-b3b6-1b84160b68f0/nike-just-do-it.png" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/4c003de0-e242-4224-a1b7-9e38c426b361/nike-just-do-it.png" alt=""/></div>
                </div>
           </div>
           <div className="box">
            <div className="box-name">Gear Up</div>
           </div>
           <div id="gear-up-img-container">
            <div id="gear-up-img">
                <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_380,c_limit/e74e6f97-2483-4f31-a78f-784f554a2b68/nike-just-do-it.jpg" alt=""/></div>
                <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_380,c_limit/1edd0e07-a08a-4b17-8384-0a6584c16fe7/nike-just-do-it.jpg" alt=""/></div>
                <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_380,c_limit/a13acd4b-3ae8-4243-9303-736c7af9e55a/image.jpg" alt=""/></div>
            </div>
           </div>
           <div className="box">
            <div className="box-name">Don't Miss</div>
           </div>
           <div id="dont-miss-img-container">
            <div id="dont-miss-img">
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/d757bbd6-821e-4085-b7b3-1260d0632c0f/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/468de987-e4e6-4bda-a652-4d9b0d745d95/nike-just-do-it.png" alt=""/></div>
            </div>
           </div>
           <div className="box">
            <div className="box-name">Always Iconic</div>
           </div>
           <div id="always-iconic-img-container">
            <div id="always-iconic-img">
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/64438d05-3165-4922-a77e-e3f6e08496bc/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/91f839aa-b110-4acc-879a-2cea80bc580c/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/db148950-20f5-4801-b53d-771c55c89373/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/f831c281-1eee-4355-bc21-7503ecfa5526/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/428611ed-169d-483d-9872-86165159213e/nike-just-do-it.jpg" alt=""/></div>
            </div>
           </div>
           <div className="box">
            <div className="box-name">Shop by Sport</div>
           </div>
           <div id="shop-by-sport-img-container">
            <div id="shop-by-sport-img">
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/a51d84b2-282a-44d6-957d-aa57473ed73d/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/0376dfa6-a2d7-4867-bd13-4b8e465705c1/nike-just-do-it.jpg" alt=""/></div>
                   <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/3df1f8e5-5ece-4e81-87e6-f8a30c8a3fab/nike-just-do-it.jpg" alt=""/></div>
            </div>
            <div id="shop-by-sport-desc-container">
                <div id="shop-by-sport-desc">
                    <div>
                    <div className="shop-by-first-line">Nike Basketball</div>
                    <div className="shop-by-second-line">Styles made for your game.</div>
                    <div className="shop-by-third-line">Shop</div>
                   </div>
                   <div>
                    <div className="shop-by-first-line">Nike Basketball</div>
                    <div className="shop-by-second-line">Styles made for your game.</div>
                    <div className="shop-by-third-line">Shop</div>
                   </div>
                   <div>
                    <div className="shop-by-first-line">Nike Basketball</div>
                    <div className="shop-by-second-line">Styles made for your game.</div>
                    <div className="shop-by-third-line">Shop</div>
                   </div>
                </div>
            </div>
            <div className="box">
                <div className="box-name">The Essentials</div>
            </div>
            <div id="ess-img-container">
                <div id="ess-img">
                       <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/5e9d47e4-d0af-4cfe-a40a-31729d9d2ce4/nike-just-do-it.png" alt=""/></div>
                       <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/963a54ad-6b91-4efe-8927-217656eb5240/nike-just-do-it.png" alt=""/></div>
                       <div><img className="w-h-100" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_540,c_limit/e11e868d-e199-40fa-828c-a4e19c9b6943/nike-just-do-it.png" alt=""/></div>
                </div>
           </div>
           <div id="list-container">
            <div id="list">
                <div>
                    <div className="list-first-line">Icons</div>
                    <div className="list-line">Air Force 1</div>
                    <div className="list-line">Huarache</div>
                    <div className="list-line">Air Max 90</div>
                    <div className="list-line">Air Max 95</div>
                </div>
                <div>
                    <div className="list-first-line">Shoes</div>
                    <div className="list-line">All Shoes</div>
                    <div className="list-line">Custom Shoes</div>
                    <div className="list-line">Jordan Shoes</div>
                    <div className="list-line">Running Shoes</div>
                </div>
                <div>
                    <div className="list-first-line">Clothing</div>
                    <div className="list-line">All Clothing</div>
                    <div className="list-line">Modest Wear</div>
                    <div className="list-line">Hoodies & Pullovers</div>
                    <div className="list-line">Shirts & Tops</div>
                </div>
                <div>
                    <div className="list-first-line">Kid's</div>
                    <div className="list-line">Infant & Toddler Shoes</div>
                    <div className="list-line">Kids' Shoes</div>
                    <div className="list-line">Kids' Jordan Shoes</div>
                    <div className="list-line">Kids' Basketball Shoes</div>
                </div>
            </div>

            <div id="footer">
                <div id="top-left">
                    <div id="row-one">
                        <ul>
                            <li className="r1">FIND A STORE</li>
                            <li>BECOME A MEMBER</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                    <div id="row-two">
                        <ul>
                            <li className="r1">GET HELP</li>
                            <li className="r2">Order Status</li>
                            <li className="r2">Delivery</li>
                            <li className="r2">Returns</li>
                            <li className="r2">Payment Options</li>
                            <li className="r2">Contact Us On</li>
                            <li className="r2">Nike.com Inquiries</li>
                            <li className="r2">Contact Us On All Other</li>
                            <li className="r2">Inquiries</li>
                        </ul>
                    </div>
                    <div id="row-three">
                        <ul>
                            <li className="r1">ABOUT NIKE</li>
                            <li className="r2">News</li>
                            <li className="r2">Careers</li>
                            <li className="r2">Investors</li>
                            <li className="r2">Sustainability</li>
                        </ul> 
                    </div>
                </div>
                <div id="top-right">
                    <div className="logo"><i className="fa-brands fa-twitter"></i></div>
                    <div className="logo"><i className="fa-brands fa-facebook"></i></div>
                    <div className="logo"><i className="fa-brands fa-youtube"></i></div>
                    <div className="logo"><i className="fa-brands fa-instagram"></i></div>
                </div>
            </div>
            <div id="footer-two">
                <div id="bottom-left">
                    <i className="fa-solid fa-location-dot"></i> India
                </div>         
            <div id="bottom-right">
                <div>Guides</div>
                <div>Terms of Sale</div>
                <div>Terms of Use</div>
                <div>Nike Privacy Policy</div>
            </div>
            </div>

        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home