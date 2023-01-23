import './App.css';
import NavBar from './complementos/NavBar';
import ItemListContainer from './complementos/ItemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductosGeneral from './complementos/ProductosGeneral';
import CartContextProvider from './complementos/context/CartContext';
import Cart from './complementos/Cart';
import Checkout from './complementos/Checkout';






function App() {
  return (
    <CartContextProvider>
          <div>
        <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path={"/"} element={<ItemListContainer/>} />
      <Route path={"/categoria/:idCategoria"} element={<ItemListContainer/>} />
      <Route path={"/item/:id"} element={<ProductosGeneral/>} />
      <Route path={"/cart"} element={<Cart/>} />
      <Route path={"/checkout"} element={<Checkout/>} />
    </Routes>
  
  </BrowserRouter>

    </div>
    </CartContextProvider>
  );
}

export default App;
