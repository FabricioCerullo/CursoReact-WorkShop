import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotals} = useContext(CartContext)

    if (cartTotals()===0) {
        return("")
    }

    return cartTotals() ? <Link to={"/cart"} type="button" className="btn bg-light position-relative">
            <img src={"/CursoReact-main/public/images//bag.svg"} alt={"Carro"} width={28} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotals()}</span>
        </Link> :"";
    
}

export default CartWidget;