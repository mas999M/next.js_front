"use client"

import Cookies from "js-cookie";
import {useState, useEffect, useContext} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {LoginContext, LoginProvider, useLogin} from "./LoginContext";

export default function Login() {
    const router = useRouter();

    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();
    const {logged , setLogged} = useContext(LoginContext);
    // const [logged , setToggle] = useContext(LoginContext);


    useEffect(() => {
        const ss = async () => {

            const res = await fetch('http://localhost:8000/api/user', {
                credentials: "include",
            });
            if(res.ok){
                setLogged(true); // تغییر وضعیت logged به true
                router.replace('/');
            }else{
                // setLoading(false);
            }

        }
        ss();
    })



    console.log("logged", logged);  // این برای دیدن مقدار اولیه در هر بار رندر

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // ارسال درخواست برای دریافت توکن CSRF
            await fetch("http://localhost:8000/sanctum/csrf-cookie", {
                method: "get",
                credentials: "include",
            });

            // ارسال درخواست ورود به سیستم (login)
            const res = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
                headers: {
                    "Content-Type": "application/json",
                    'X-XSRF-TOKEN': xsrfToken,
                },
            });

            // بررسی وضعیت پاسخ
            if (!res.ok) {
                throw new Error(`Login failed with status: ${res.status}`);
            }

            // تجزیه داده‌های JSON
            const data = await res.json();

            // تنظیم داده‌ها (پیام) در state
            setMessage(data);

            // نمایش داده‌ها در کنسول
            console.log("this is logged ..", data.logged);
            if (data.logged) {
                setLogged(true); // تغییر وضعیت logged به true
                router.refresh();
            }

        } catch (err) {
            console.log("Error occurred:", err);
            setMessage({ error: err.message }); // می‌توانید پیام خطا را هم در state نمایش دهید
        }
    };

    // استفاده از useEffect برای واکنش به تغییرات logged
    useEffect(() => {
        console.log("Updated logged value:", logged); // زمانی که logged تغییر کرد
    }, [logged]);


    return (
        <>
            <section className="bg-gray-800 h-screen pt-[10%] relative items-center justify-center">
                <div className="top-blue w-[250px] h-[250px] bg-blue-400 rounded-full absolute top-[10%] left-[50%]"></div>
                <div className="bottom-pink w-[280px] h-[280px] rounded-full absolute top-[50%] left-[12%] lg:left-[30%]"></div>
                <div className="top-orange w-[300px] h-[300px] rounded-full absolute top-[5%] left-[5%] md:left-[23%] lg:left-[30%]"></div>
                <div className="container w-[350px] sm:w-[350px] m-auto text-center p-8 text-white z-10"
                     style={{ backdropFilter: 'blur(20px)' }}>
                    <img
                        id="passport"
                        src="https://upload.wikimedia.org/wikipedia/commons/6/67/User_Avatar.png"
                        alt=""
                        className="mx-auto"
                    />
                    <p><span className="text-xl sm:text-2xl">Login Here</span></p>

                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="email" id="email" placeholder="email..." onChange={(e) => setEmail(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-2" />
                        <input type="password" id="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}
                               className="w-full mx-auto text-base sm:textlg p-2 mt-4" />
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
    );
}
