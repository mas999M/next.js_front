'use client'

import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {useUpdate} from "../../../../../components/product-context";

export default function SingleUpdateProduct()
{

    const {updateProduct , setUpdateProduct} = useUpdate();
    console.log(updateProduct);
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const params = useParams();
    const {updateid} = params;
    console.log(updateid);
    const [product, setProduct] = useState({});
    const [info, setInfo] = useState({});

    // data
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [price, setPrice] = useState('');
    const [name, setName] = useState('');

    const formData = new FormData();

    if(name) formData.append('name', name);
    if(price) formData.append('price', price);
    if(description) formData.append('description', description);
    if(image) formData.append('image', image);



    useEffect(() => {
        const show = async () => {
            try{
                const res = await fetch(`http://localhost:8000/api/product/${updateid}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
                const data = await res.json();
                console.log('pRODUCT DATA ',data.product);
                setProduct(data);
                setInfo(data.product);
            }catch(e){
                console.error(e);
            }
        }
        show()
    },[updateProduct]);


    const [refresh , setRefresh] = useState(false);
    if(refresh){
        setRefresh(false);
        setUpdateProduct(false);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            await fetch('http://localhost:8000/sanctum/csrf-cookie', {
                credentials: "include",
            });
            const res = await fetch(`http://localhost:8000/api/product/update/${updateid}`, {
                method: "POST",
                headers: {

                    "X-XSRF-TOKEN": xsrfToken,

                },
                credentials: "include",
                body:formData,
            });

            if(res.ok){
                console.log('sended');
                if(!refresh && !updateProduct){

                    setUpdateProduct(true);
                    setRefresh(true);

                }
            }

            const data = await res.json();

            console.log('response',data);
            setPrice('');
            setName('');
            setDescription('');
            setImage(null);

        }catch (err){
            console.error(err);
        }
    }

    return(
        <>
            <div className="container mx-auto p-4 bg-stone-200 shadow-2xl">
                <h1 className="text-3xl font-bold text-black mb-6">Update Product</h1>
                <div className="rounded-3xl">
                    <img src={product.image_url} className="w-34 h-34 rounded-4xl" alt="avatar" />
                </div>

                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>


                    {/* Bio and Avatar */}
                    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
              <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="bio"
                  name="bio"
                  rows={3}
                  placeholder={`Product Description :  ${info.description}`}
                  value={description}
                  className="block w-full h-48 rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                  style={{ backgroundColor: "#f6f6f6" }}
              />
                        </div>

                        <div>
                            <label
                                htmlFor="avatar"
                                className="block  w-full h-48 border-2 border-dashed border-gray-300 rounded-md cursor-pointer flex flex-col items-center justify-center bg-[#f6f6f6] hover:bg-gray-50"
                            >
                                <div className="text-center">
                                    <div className="mb-2">
                                        <div className="bg-[#8c0327] hover:bg-[#6b0220] text-white rounded-full py-2 px-4">
                                            Select from the computer
                                        </div>
                                    </div>
                                    <p className="text-gray-500">or drag photo here</p>
                                    <p className="text-gray-500 text-sm mt-1">PNG, JPG, SVG</p>
                                </div>
                            </label>
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                id="avatar"
                                name="avatar"
                                type="file"
                                accept="image/*"
                                className="sr-only"
                            />
                        </div>
                    </div>

                    {/* First and Last Name */}
                    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder={`Product Name :  ${info.name}`}
                                value={name}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black  focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                                style={{ backgroundColor: "#f6f6f6" }}
                            />
                        </div>
                        <div>
                            <input
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder={`Product Price :  ${info.price}`}
                                value={price}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                                style={{ backgroundColor: "#f6f6f6" }}
                            />
                        </div>
                    </div>





                    {/* Submit Button */}
                    <div className="col-span-full mt-6 p-2">
                        <button
                            type="submit"
                            className="block w-full bg-[#8c0327] hover:bg-[#6b0220] text-white font-bold py-3 px-4 rounded-full"
                        >
                            Update user
                        </button>
                    </div>
                </form>
            </div>

        </>
    )

}