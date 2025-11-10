"use client"

import {useEffect, useState} from "react";

export default function Me()
{
    const [user , setUser] = useState({});
   useEffect(()=> {
       const user = async () => {
           const res = await fetch("http://localhost:8000/api/me",{
               credentials: "include",
           });
           const data = await res.json();
           setUser(data);
       }
       user();
   },[]);

   console.log(user);
    return(
        <>
           email :  {user.name}
        </>
    )
}