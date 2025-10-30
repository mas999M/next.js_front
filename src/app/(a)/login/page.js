"use client"
import Cookies from "js-cookie";

import {useState} from "react";

export default function Login()
{

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
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type={"email"} onChange={(e) => setEmail(e.target.value)}  placeholder={"Email"}/>
                <input type={"password"} onChange={(e)=> setPassword(e.target.value)} placeholder={'password'} />
                <button type="submit">Login</button>
            </form>
        </>
    )
}