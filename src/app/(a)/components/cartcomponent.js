"use client"

// import {useEffect, useState} from "react";
// import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
// import Cookies from "js-cookie";

import {useEffect, useState} from "react";

export default function CartComponent()
{
    // const xsrfToken = Cookies.get("XSRF-TOKEN");
    //
    // const [cart, setCart] = useState([])
    //
    // useEffect(() => {
    //     const show = async () => {
    //         try{
    //
    //             await fetch("https://localhost:8000/sanctum/csrf-cookie",{
    //                 method: "GET",
    //                 credentials: "include",
    //             });
    //
    //             const res = await fetch('http://localhost:8000/api/cart' , {
    //                 method: "GET",
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'X-XSRF-TOKEN': xsrfToken,
    //                     'Content-Type': 'application/json',
    //                 },
    //                 credentials: "include",
    //             });
    //             const data = await res.json();
    //             setCart(data);
    //         }catch(e){
    //             console.log(e)
    //         }
    //         show();
    //     }
    //
    //     show();
    //
    // }, []);

    const [cart , setCart] = useState([]);
    const [link, setLink] = useState();

    useEffect(() => {
        const show = async () => {
            try{
                 await fetch("http://localhost:8000/sanctum/csrf-cookie" , {
                    method: "get",
                     credentials: "include",
                });
                 const res = await fetch('http://localhost:8000/api/cart' , {
                     method: "GET",
                     credentials: "include",
                     headers: {
                         "Content-Type": "application/json",
                     },
                 });
                 const data = await res.json();
                 setCart(data);

            }catch(e){
                console.log(e)
            }
        }
        show();
    }, []);

    const total = cart.reduce((sum, item) => {
        return sum + item.quantity * item.product.price;
    }, 0);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:8000/sanctum/csrf-cookie", {
                method: "GET",
                credentials: "include",
            });

            if(res){
                const response = await fetch('http://localhost:8000/api/checkout' , {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                },
            });
                const data = await response.json();
                if (data.url) {
                    // فرستادن کاربر به درگاه زرین‌پال
                    window.location.href = data.url;
                } else {
                    alert("مشکلی در پرداخت پیش آمده");
                }
            }
        }catch (e) {
            console.log(e)
        }

        // two

    }
    return(
        <>
            <div className="container mx-auto px-4 py-8 max-w-5xl">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h1 className="text-2xl font-bold my-4">Shopping Cart</h1>



                </div>

                <div className={'mt-8'}>
                    {cart.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex-col md:flex-row border-b border-gray-400 py-4">

                                                        <div className="flex-shrink-0">
                                                            <img src={item.product.image_url} alt="Product image"
                                                                 className="w-32 h-32 object-cover"/>
                                                        </div>

                                                        <div className="mt-4 md:mt-0 md:ml-6">
                                                            <h2 className="text-lg font-bold">{item.product.name}</h2>
                                                            <p className="mt-2 text-gray-600">{item.product.id}</p>
                                                            <div className="mt-4 flex items-center">
                                                                <span className="mr-2 text-gray-600">{item.quantity}</span>
                                                                <div className="flex items-center">
                                                                    <button className="bg-gray-200 rounded-l-lg px-2 py-1" disabled>-</button>
                                                                    <span className="mx-2 text-gray-600">1</span>
                                                                    <button className="bg-gray-200 rounded-r-lg px-2 py-1" disabled>+</button>
                                                                </div>
                                                                <span className="ml-auto font-bold">{item.product.price}</span>
                                                            </div>
                                                        </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex justify-end items-center mt-8">
                    <span className="text-gray-600 mr-4">Subtotal:</span>
                    <span className="text-xl font-bold">
                         <div>
      {/*{cart.map((item, index) => (*/}
      {/*    <div key={index}>*/}
      {/*        <h3>{item.product.name}</h3>*/}
      {/*        <p>تعداد: {item.quantity}</p>*/}
      {/*        <p>قیمت واحد: {item.product.price} تومان</p>*/}
      {/*        <p>جمع: {item.quantity * item.product.price} تومان</p>*/}
      {/*    </div>*/}
      {/*))}*/}

                             <hr />
      <h2>💰 مجموع کل: {total.toLocaleString()} تومان</h2>
    </div>

                    </span>

                </div>
               <form onSubmit={handleSubmit}>
                   <button type={'submit'} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
                       Checkout
                   </button>
               </form>
            </div>
        </>
    )
}