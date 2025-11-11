'use client'

import Cookies from "js-cookie";
import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";


export default function RegisterComponent()
{

    const router = useRouter();

    const xsrfToken = Cookies.get('XSRF-TOKEN');

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("https://backend-production-c2a6.up.railway.app/sanctum/csrf-cookie" , {
            method: "get",
            credentials: "include",

        });

        await fetch("https://backend-production-c2a6.up.railway.app/api/register" , {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
                'X-XSRF-TOKEN': xsrfToken,
            },
            credentials: "include",
        });
        router.push("/login");

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
                    <p><span className="text-xl sm:text-2xl">Register Here</span></p>

                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input type="Name" id="Name" placeholder="Name..." onChange={(e) => setName(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-2"/>
                        <input type="Email" id="Email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-4"/>
                        <input type="password" id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-4"/>
                        <button
                            type="submit"
                            className="p-2 sm:text-lg bg-blue-500 rounded-2xl m-8 w-36 mx-auto sm:w-48 hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-pink-700"
                        >
                            Register
                        </button>

                    </form>
                    <p>If you already have an account, click to <Link className={'text-red-400'} href={'/login'}>login</Link></p>
                </div>

            </section>
        </>
    )
}