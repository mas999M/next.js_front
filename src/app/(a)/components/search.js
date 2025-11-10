"use client"

import {useState} from "react";
import Cookies from "js-cookie";

export default function Search()
{

const [search , setSearch] = useState("");
    const xsrfToken = Cookies.get("XSRF-TOKEN");

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await fetch('http://localhost:8000/sanctum/csrf-cookie', {
            credentials: "include",
        })
        const res = await fetch("http://localhost:8000/api/search", {
            method: "post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-XSRF-TOKEN": xsrfToken,
            },
            body: JSON.stringify({
                search: search,
            })
        });
        const data = await res.json();
        console.log('new searchbar : ',data);
    }catch(err){
        console.log(err);
    }
}

console.log('save search == :: == ->',saveSearch);

    return(
        <form onSubmit={handleSubmit}>

        <div className="h-55 flex w-full justify-center items-center dark:bg-gray-800 bg-stone-200 ">
            <div className="flex relative rounded-md w-full px-4 max-w-xl">

                <input
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text"
                    name="q"
                    id="query"
                    placeholder="Button, Footer, etc"
                    className=" bg-white focus:bg-white focus:text-black w-full p-3 rounded-md border-2 border-gray-300 border-r-0 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-600 dark:text-gray-200 rounded-r-none"
                />
                <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 transition text-white text-lg font-semibold py-3 px-6 rounded-r-md"
                >
                    <span>Search</span>
                    <span className="hidden md:block">
            <svg
                className="text-gray-200 h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.966 56.966"
                width="20"
                height="20"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786 c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208 c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837 C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6 c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17 S14.61,6,23.984,6z" />
            </svg>
          </span>
                </button>

            </div>
        </div>
        </form>

    )
}