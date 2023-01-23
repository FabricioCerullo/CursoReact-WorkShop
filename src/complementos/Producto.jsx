import React, {useContext,useState}from "react";
import listaProd from "./json/listaProd.json";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";


const Producto = ({item}) => {
    const {id} = useParams();
    const {addItem} = useContext(CartContext);
    const [stockItem, setStockItem] = useState(0); 

    const onAdd = (quantity) =>{
        addItem(item, quantity);
    }

    return (
        <div className="container">
            <div className = "row">
                <div className="col-md-6 offset-md-3 text-center">
                        <img src={item.Imagen} className={"img-fluid"} alt={item.Nombre} />
                        <h1>{item.Nombre}</h1>
                        <p>{item.Descripcion}</p>
                        <p><b>${item.Precio}</b></p>
                        <p className="alert alert-success">{item.Stock}</p>
                        <ItemCount onAdd={onAdd} />
                </div>
            </div>
        </div>
    )

}


export default Producto;