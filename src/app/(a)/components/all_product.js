"use client"

import {useEffect, useState} from "react";

export default function AllProduct()
{


    const [allProducts, setAllProducts] = useState([]);


    useEffect(() => {
        const all = async () => {
            try{
                const res = await fetch("http://localhost:8000/api/products" , {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    credentials: "include",
                });
                const data = await res.json();
                setAllProducts(data);

            }catch (err){
                console.log(err)
            }
        }
        all();

    }, []);



    return(
        <>
            hello world ......
====        <div className={'container grid grid-cols-5  gap-8 mx-auto mt-5 max-w-6xl'}>

            {allProducts.map((product , index) => {
                return (
                        <div className=" relative h-100 rounded-xl shadow-2xl" key={index}>

                               <div className="absolute top-0 w-full h-50 ">
                                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover rounded-t-lg"/>
                               </div>
                               <div className="text-red-600 text-3xl top-1 right-1 absolute ">
<i className="fa-brands fa-salesforce"></i>
                               </div>

                                <div className="absolute bottom-0 h-45 w-full ">

                                    <div className="flex h-15 w-full  ">
                                        <span className="font-medium text-lg mt-2 mx-auto">{product.name}</span>
                                    </div>

                                    <hr className="border mb-2"></hr>

                                    <div className="flex h-10 w-full">
                                        <span className="font-medium mx-auto mt-1">{product.price}$</span>
                                    </div>
                                    <hr className="border mb-2"></hr>

                                     <div className="flex h-15 w-full mt-3 ms-1">
                                      <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-700 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 container mx-auto ms- rounded-2xl">Buy</button>
                                     </div> 
                               </div>
                        </div>
                )
            })}

            </div>
        </>
    )
}