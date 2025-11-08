'use client'


import UserPanel from "../components/UserPanel";
import {redirect, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {router} from "next/client";

export default function Panel()
{
    const router = useRouter();
    const [status, setStatus] = useState();

    useEffect(() => {
        const show = async() => {
            await fetch('http://localhost:8000/sanctum/csrf-cookie',{
                credentials: "include",
            });
            const res = await fetch("http://localhost:8000/api/user",{
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
            console.log('_______________________________________________res ======== --------------------',res);
            console.log('++ status ',res.status);

            if(res.status === 401){
               return  router.push('/login');
            }

        }
        show();
    },[])

        return(
            <>
                <UserPanel/>
            </>
        )


}