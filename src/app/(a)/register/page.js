"use client"

import {useEffect, useState} from "react";
// import * as request from "next/headers";
// import {Cookie} from "next/dist/compiled/@next/font/dist/google";
import Cookies from "js-cookie";

export default function Register()
{
    const xsrfToken = Cookies.get('XSRF-TOKEN');


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();

        await fetch("http://localhost:8000/sanctum/csrf-cookie" , {
            method: "get",
            credentials: "include",

        });


          await fetch("http://localhost:8000/api/register" , {
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

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder={'name'}/>
                <input type={'email'} onChange={(e) => setEmail(e.target.value)} placeholder={'email'} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder={'password'}/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}