import React, { useContext } from 'react';
import { CartContext } from "./context/CartContext";
import {Link} from "react-router-dom";


const Cart = () => {
    const {cart, removeItem,clearCart,sumaTotals, cartTotals} = useContext(CartContext);

    if (cartTotals()===0) {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-danger text-center" role="alert">No se encontraron productos en el Carrito!!</div>
                        <Link to={"/"} className="btn bg-light position-relative">Volver al Menu</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end"><Link onClick={clearCart} className="btn bg-light position-relative">Vaciar Carro</Link></th>
                            </tr>

                            <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                <td className="aling-middle"><img src={item.Imagen} alt={item.Nombre} width={64}/></td>
                                <td className="text-left aling-middle">{item.Nombre}</td>
                                <td className="text-center aling-middle">{item.quantity}</td>
                                <td className="text-center aling-middle">${item.Precio}</td>
                                <td className="text-end aling-middle"><Link onClick={() =>{removeItem(item.id)}}><img src={"https://cdn-icons-png.flaticon.com/512/49/49818.png"} alt={"eliminar prod."} width={28}/></Link></td>                                                                                                  
                                </tr>

                            ))}
                            <tr>
                                <td colSpan={3} className="text-center"><b>SUMA TOTAL</b></td>
                                <td><b>${sumaTotals()}</b></td>
                                <td><Link to={"/checkout"} className="btn bg-light position-relative">Finalizar Compra</Link></td>	
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export default Cart;