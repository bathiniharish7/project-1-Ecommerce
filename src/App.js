import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';
import NavbarPanel from './components/NavbarPanel';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
     <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
