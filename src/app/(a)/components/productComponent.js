"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import {useCart} from "./cartContext";
import {useRouter} from "next/navigation";

export default function ProductComponent() {
    const xsrfToken = Cookies.get("XSRF-TOKEN");
    const router = useRouter();

    const {cart , CartImprove} = useCart();
    console.log('this is cart = ',cart);

    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const productsPerPage = 10;



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`https://backend-production-5727.up.railway.app/api/products?page=${currentPage}&per_page=${productsPerPage}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    credentials: "include",
                });
                const data = await res.json();
                setAllProducts(data.data);
                setLastPage(data.last_page);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProducts();
    }, [currentPage]);

    const quantity = 1;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pid = e.target.productId.value;

        try {
            await fetch("https://backend-production-5727.up.railway.app/sanctum/csrf-cookie", {
                method: "GET",
                credentials: "include",
            });

            const res = await fetch(`https://backend-production-5727.up.railway.app/api/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                credentials: "include",
                body: JSON.stringify({ id: pid  , quantity : quantity }),
            });
            if(res.status === 401){
                router.push('/login');
            }
            const data = await res.json();
            console.log(data);
            if(data === 'added'){
                CartImprove();
            }
        } catch (err) {
            console.log(err);
        }
    };



    const [search , setSearch] = useState("");



       const sendSearch = async () => {

           try{
               const res = await fetch(`https://backend-production-5727.up.railway.app/api/search`, {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                       "Accept": "application/json",
                       "X-XSRF-TOKEN": xsrfToken,
                   },
                   credentials: "include",
                   body: JSON.stringify({
                       search : search,
                   })
               });
               const data = await res.json();
               console.log('data dota data = ' , data);
               setAllProducts(data.data)
               console.log('two' , allProducts);

           }catch(err){
               console.log(err);
           }
       }



    useEffect(() => {
        sendSearch();
    },[search]);

    console.log('first' , allProducts);

    return (
        <>
            <div className="h-55 flex w-full justify-center items-center dark:bg-gray-800 bg-stone-200 ">
                <div className="flex relative rounded-md w-full px-4 max-w-xl">

                    <input
                        onChange={(e) => setSearch(e.target.value)}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto p-10">

                {allProducts.map((product, index) => {
                    return (
                        <div key={index} className="w-full max-w-sm border border-blue-200 rounded-lg shadow-md p-4">
                            <Link key={index} href={`product/${product.id}`}>
                                <div className="relative">
                                <span
                                    className="absolute top-2 left-2 bg-orange-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
                                    -20%
                                </span>
                                    <button
                                        className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-gray-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                                        </svg>
                                    </button>
                                    <div>
                                        <img
                                            src={product.image_url}
                                            alt="Product Image"
                                            className="object-contain w-full h-[270px] fill"
                                        />
                                    </div>
                                </div>
                            </Link>

                            <div className="mt-4">
                                <h3 className="text-gray-800 font-medium text-base">
                                    {product.name}
                                </h3>
                                <p className="uppercase text-green-600 text-xs font-medium">
                                    Already
                                </p>
                                <div className="flex space-x-1 text-orange-500 text-sm mt-1">
                                    {Array(5).fill().map((_, idx) => (
                                        <svg key={idx} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={idx < 4 ? "currentColor" : "none"} viewBox="0 0 20 20">
                                            <path d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
                                    ))}
                                </div>
                                <div className="flex items-end justify-between">
                                    <div className="flex items-baseline space-x-2 mt-2">
                                        <span className="text-blue-600 text-xl font-semibold">${product.price}</span>
                                        <span className="text-gray-400 text-sm line-through">$1500.00</span>
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <input type={'hidden'} name={'productId'} value={product.id}/>
                                        <button type="submit"
                                                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round" strokeLinejoin="round"
                                                 className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
                                                <path d="M17 17h-11v-14h-2"/>
                                                <path d="M6 5l14 1l-1 7h-13"/>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8 gap-2">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    Prev
                </button>

                {[...Array(lastPage)].map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentPage(idx + 1)}
                        className={`px-3 py-1 rounded ${currentPage === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                    >
                        {idx + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, lastPage))}
                    disabled={currentPage === lastPage}
                    className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
                >
                    Next
                </button>
            </div>
        </>
    );

}
