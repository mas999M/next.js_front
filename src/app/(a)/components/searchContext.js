"use client"

import {createContext, useContext, useState} from "react";

export const SearchContext = createContext();

export default function SearchProvider({ children }){

    const [saveSearch , setSaveSearch] = useState([]);

    return(
        <SearchContext.Provider value={{saveSearch, setSaveSearch}}>
            {children}
        </SearchContext.Provider>
    )

}

export const useSearch = () => useContext(SearchContext);