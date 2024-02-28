
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Cart from './components/Cart';

import NavbarPanel from './components/NavbarPanel';
import PrimarySearchAppBar from './components/AppBar';
import NavBar from './components/NavBar';
import YourComponent from './components/Test';


function App() {

  return ( 
   <div className="App">
  
    <PrimarySearchAppBar/>
    {/* <NavBar/> */}
     {/* <NavbarPanel/> */}
     <div style={{marginTop:'20px'}}>
     <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/test' element={<YourComponent/>}/>

      </Routes>
     </div>
     
    </div>
 
  );
}

export default App;
