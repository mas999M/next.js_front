"use client"

import {useEffect, useState} from "react";

export default function Me()
{
    const [user , setUser] = useState({});
   useEffect(()=> {
       const user = async () => {
           const res = await fetch("https://backend-production-5727.up.railway.app/api/me",{
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