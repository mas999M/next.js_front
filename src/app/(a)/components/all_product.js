"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function AllProduct() {
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const productsPerPage = 10;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/products?page=${currentPage}&per_page=${productsPerPage}`, {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const pid = e.target.productId.value;

        try {
            await fetch("http://localhost:8000/sanctum/csrf-cookie", {
                method: "GET",
                credentials: "include",
            });

            await fetch(`http://localhost:8000/api/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "X-XSRF-TOKEN": xsrfToken,
                },
                credentials: "include",
                body: JSON.stringify({ id: pid }),
            });
        } catch (err) {
            console.log(err);
        }
    };

    console.log(allProducts);
    return (
        <>
            {/*<div className="container grid grid-cols-5 gap-8 mx-auto mt-22 max-w-6xl">*/}
            <div className="grid grid-cols-4 h-screen gap-6 container mx-auto p-10">

                {allProducts.map((product, index) => {
                    return (

                            <div key={index} className="w-80 border border-blue-200 rounded-lg shadow-md p-4">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300"
                                             fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927C9.349 2.2 10.651 2.2 10.951 2.927l1.558 3.779 4.004.37c.85.079 1.194 1.139.572 1.724l-2.922 2.658.87 3.917c.181.816-.68 1.448-1.419 1.034L10 13.01l-3.614 1.96c-.74.414-1.6-.218-1.419-1.034l.87-3.917-2.922-2.658c-.622-.585-.278-1.645.572-1.724l4.004-.37L9.049 2.927z"/>
                                        </svg>
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

            {/*</div>*/}

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
                        className={`px-3 py-1 rounded ${currentPage === idx + 1 ? "bg-red-500 text-white" : "bg-gray-200"}`}
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
