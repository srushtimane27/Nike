import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Shop from './Components/Shop';
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='single-product/:id' element={<SingleProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
