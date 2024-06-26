import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Shop from './Components/Shop';
import SingleProduct from './Components/SingleProduct';
import AddProduct from './Components/AddProduct';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='single-product/:id' element={<SingleProduct/>}/>
        <Route path='add-product' element={<AddProduct/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
