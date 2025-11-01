"use client"
import Cookies from "js-cookie";

import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

// import {redirect, useRouter} from "next/navigation";

export default function Login()
{
    const router = useRouter();

    // useEffect(() => {
    //     const userCheck = async () => {
    //         try{
    //             const res = await fetch("https://localhost:8000/api/users" ,{
    //                 method: "GET",
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     "Accept": "application/json",
    //                 },
    //                 credentials: "include",
    //             });
    //             if(res.status === 401){
    //                 router.push("/");
    //             }
    //         }catch (e){
    //             console.error(e);
    //         }
    //     }
    //     userCheck();
    // }, []);

    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await fetch("http://localhost:8000/sanctum/csrf-cookie", {
                method: "get",
                credentials: "include",
            })
            await fetch("http://localhost:8000/api/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    'X-XSRF-TOKEN': xsrfToken,
                }
            })
        }catch(err){
            console.log(err)
        }
        router.refresh();
    }

    return(
        <>
            <section className="bg-gray-800 h-screen pt-[10%] relative items-center justify-center">
                <div
                    className="top-blue w-[250px] h-[250px] bg-blue-400 rounded-full absolute top-[10%] left-[50%]"></div>
                <div
                    className="bottom-pink w-[280px] h-[280px] rounded-full absolute top-[50%] left-[12%] lg:left-[30%]"></div>
                <div
                    className="top-orange w-[300px] h-[300px] rounded-full absolute top-[5%] left-[5%] md:left-[23%] lg:left-[30%]"></div>
                <div className="container w-[350px] sm:w-[350px] m-auto text-center p-8 text-white z-10"
                     style={{backdropFilter: 'blur(20px)'}}>
                    <img
                        id="passport"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
                        alt=""
                        className="mx-auto"
                    />
                    <p><span className="text-xl sm:text-2xl">Login Here</span></p>

                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-2"/>
                        <input type="password" id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-4"/>
                        <button
                            type="submit"
                            className="p-2 sm:text-lg bg-blue-500 rounded-2xl m-8 w-36 mx-auto sm:w-48 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-pink-700"
                        >
                            Login
                        </button>

                    </form>
                    <p>If you're new here, click to <Link className={'text-red-400'} href={'/register'}>Register</Link></p>
                </div>

            </section>
        </>
    )
}