'use client';

import {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import Login from "../components/Login";

export default function LoginMe() {
    const router = useRouter();
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        const ss = async () => {

            const res = await fetch('http://localhost:8000/api/user', {
                credentials: "include",
            });
            if(res.ok){
                router.replace('/');
            }else{
                setLoading(false);
            }

        }
        ss();
    })

    if(loading){
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
    } else {
        return (
            <>
                <Login/>
            </>
        );
    }

}
