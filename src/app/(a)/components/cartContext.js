'use client'

import {createContext, useContext, useState} from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(0);

    function CartImprove(){
        setCart(prev => prev + 1);
    }

    return (
        <CartContext.Provider value={{ cart , CartImprove }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);