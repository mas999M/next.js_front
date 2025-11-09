'use client'


import UserPanel from "../components/UserPanel";
import {redirect, useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {router} from "next/client";

export default function Panel()
{
    const router = useRouter();
    const [status, setStatus] = useState();
    const [loading, setLoading] = useState(false);

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
            }else{
                setLoading(true);
            }

        }
        show();
    },[]);

    if(!loading){
        return (
            <>
                <div
                    className="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5"
                >
                    <div className="text-center p-6">
                        <div
                            className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-[#714F04] mx-auto"
                        ></div>
                        <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Your adventure is about to begin
                        </p>
                    </div>
                </div>
            </>
        )
    }

        return(
            <>
                <UserPanel/>
            </>
        )


}