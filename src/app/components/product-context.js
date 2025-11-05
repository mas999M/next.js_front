"use client"

import {createContext, useContext, useState} from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [updateProduct, setUpdateProduct] = useState(false);


    return(
        <ProductContext.Provider value={{updateProduct, setUpdateProduct}}>
            {children}
        </ProductContext.Provider>
    );
}

export const useUpdate = () => useContext(ProductContext);