import { getFirestore, collection, addDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";

const Checkout = ()=>{
    const {cart,sumaTotals, clearCart } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [idOrder, setIdOrder] = useState("");

    const fecha = new Date();
    const generarOrders = () => {
        const order = {
            buyer: {name:nombre, email:correo, phone:telefono},
            items: cart.map(item=>({id:item.id, tittle:item.Nombre, price:item.Precio, quantity:item.quantity, price_total:item.quantity*item.Precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()} ${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total:sumaTotals()
        }
        

        const database = getFirestore();
        const ordernCollection = collection(database, "orders");
        addDoc(ordernCollection, order).then((snapShot)=>{
            setIdOrder(snapShot.id);
            const orderDoc = doc(database, "orders", snapShot.id);
            updateDoc(orderDoc, {total:order.total * 1.21});
            clearCart();
        })
    }


    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Correo</label>
                                <input type="email" className="form-control" placeholder="Ingrese su Email" onInput={(e) => {setCorreo(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Telefono</label>
                                <input type="text" className="form-control" placeholder="Ingrese su N° de Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            </div>
                            
                            <button type="button" className="btn btn-primary" onClick={generarOrders} >Generar Orden</button>
                        </form>
                </div>
              
                <div className="col">
                    <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                    <td className="aling-middle"><img src={item.Imagen} alt={item.Nombre} width={64}/></td>
                                    <td className="text-left aling-middle">{item.Nombre}</td>
                                    <td className="text-center aling-middle">{item.quantity}</td>
                                    <td className="text-center aling-middle">${item.Precio}</td>
                                    </tr>
                                ))}

                                <tr>
                                    <td className="text-end"><b>Total a Pagar</b></td>
                                    <td className="text-end"><b>${sumaTotals()}</b></td>
                                </tr>

                            </tbody>
                     </table>
                </div>

                <div className="row my-5">
                    <div className="col text-center">
                        {idOrder ? <div className="alert alert-success" role="alert">
                                    <h1>Muchas gracias por su compra!</h1>
                                    <p>Tu Número de Orden es: {idOrder}</p>
                        </div> : "" }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout;