"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import AdminHome from "@/app/components/AdminHome";

export default function BeforeHome() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const effect = async () => {
            try{
                await fetch('http://localhost:8000/sanctum/csrf-cookie',{
                    credentials: "include",
                });
                const res = await fetch('http://localhost:8000/api/user',{
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                });
                const data = await res.json();
                console.log(data);
                if(data.role !== 'admin'){
                    router.push('/');
                }else{
                    setLoading(true);
                }
            }catch(e){
                console.log(e);
                router.push('/login');
            }
        }
        effect();
    })

    if(loading === false){
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
            <AdminHome />
        </>
    )
}