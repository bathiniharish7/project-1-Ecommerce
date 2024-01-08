
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Cart from './components/Cart';

import NavbarPanel from './components/NavbarPanel';


function App() {

  return ( 
   <div className="App">
     <NavbarPanel/>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
 
  );
}

export default App;
