import React, { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let posicion = cart.findIndex(x=>x.id===item.id);
            cart[posicion].quantity+=quantity;
            setCart([...cart]);
        }else{
            setCart([...cart,{...item,quantity:quantity}]);
        }
    }

    const removeItem = (id) => {
        const productos = cart.filter(x =>x.id !== id);
        setCart(productos); 
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id) => {
        return cart.some(x => x.id === id);
    }

    const cartTotals = () => {
        return cart.reduce((total,item)=>total+=item.quantity,0)
    }

    const sumaTotals = () => {
        return cart.reduce((total,item)=>total+=item.quantity*item.Precio,0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, cartTotals, sumaTotals}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;