
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Cart from './components/Cart';

import NavbarPanel from './components/NavbarPanel';
import PrimarySearchAppBar from './components/AppBar';
import NavBar from './components/NavBar';
import YourComponent from './components/Test';
import { useState } from 'react';


function App() {
  const[searchValue,setSearchValue] = useState("");

  return ( 
   <div className="App">
  
    <PrimarySearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
    {/* <NavBar/> */}
     {/* <NavbarPanel/> */}
     <div style={{marginTop:'20px'}}>
     <Routes>
        <Route path='/' element={<Product searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
        <Route path='/cart' element={<Cart setSearchValue={setSearchValue}/>}/>
        <Route path='/test' element={<YourComponent/>}/>

      </Routes>
     </div>
     
    </div>
 
  );
}

export default App;
