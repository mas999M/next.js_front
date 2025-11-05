"use client"

import {createContext, useContext, useState} from "react";

export const LoginContext  = createContext();

export function LoginProvider({ children }) {

    const [logged, setLogged] = useState(false);

    if (logged === true){
        console.log("After set true",logged);
    };

    console.log("Before set true",logged);

    return(
        <LoginContext.Provider value={{ logged, setLogged }}>
            {children}
        </LoginContext.Provider>
    )

}

export const useLogin = () => useContext(LoginContext);