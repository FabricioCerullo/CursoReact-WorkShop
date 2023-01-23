import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({onAdd})=>{
    const [counter, setCounter] = useState(1);
    const [vendido, setVendido] = useState(false);

    const incrementarStock = ()=>{
        if (counter<10) {
            setCounter(counter+1);
        }
    }

    const decrementarStock = ()=>{
        if (counter>1) {
            setCounter(counter-1);
        }
    }


    const addToCart = (quantity)=>{
        setVendido(true);
        onAdd(quantity);

        
    }

    return(
        <div className="container text-center">
            <div className="row mb-12">
                <div className="col-md-12">
                    <div className="btn-group text-center" role="group" aria-label="Basic outlined example" >
                        <button type="button" className="btn btn-primary"onClick={incrementarStock}>+</button>
                        <button type="button" className="btn btn-primary">{counter}</button>
                        <button type="button" className="btn btn-primary"onClick={decrementarStock}>-</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="row"> 
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-primary">Termina mi Compra</Link>:<button className="btn btn-primary" onClick={()=>{addToCart(counter)}}>Agregar a la Compra</button>}
                </div>
            </div>

        </div>
    )

}

export default ItemCount;