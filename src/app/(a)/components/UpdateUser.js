'use client'

import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function UpdateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [password, setPassword] = useState('');


    const formData = new FormData();
    if(name) formData.append('name', name);
    if(bio) formData.append('bio', bio);
    if(firstName) formData.append('firstName', firstName);
    if(lastName) formData.append('lastName', lastName);
    if(avatar) formData.append('avatar', avatar);
    if(password) formData.append('password', password);
    if(email) formData.append('email', email);


    const xsrfToken = Cookies.get("XSRF-TOKEN");


    const [showUser, setShowUser] = useState([]);
    const [showAvatar, setShowAvatar] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
           await fetch('http://localhost:8000/sanctum/csrf-cookie', {
               credentials: "include",
           });
           const res =  await fetch('http://localhost:8000/api/user/update', {

               credentials: "include",
               method: "POST",
               headers: {
                   'X-XSRF-TOKEN': xsrfToken,
               },
              body: formData,
            });
           if(res.ok)
           {
               console.log('Successfully updated');
           }
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
       const show = async () => {
           try{
               const res = await fetch('http://localhost:8000/api/user', {
                   credentials: "include",
                   headers: {
                       "Content-Type": "application/json",
                       'Accept': 'application/json'
                   }
               });
               const data = await res.json();
               setShowUser(data);
               setShowAvatar(data.avatar);

           }catch (err){
               console.log(err);
           }
       };
       show();
    },[]);

    return (
        <>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-black mb-6">Update User</h1>
                <div className="rounded-3xl">
                    <img src={showAvatar} className="w-34 h-34 rounded-4xl" alt="avatar" />
                </div>

                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
                {/* Username */}
                    <div className="p-2">
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder={`username: ${showUser.name}`}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                    </div>

                    {/* Bio and Avatar */}
                    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
              <textarea
                  onChange={(e) => setBio(e.target.value)}
                  id="bio"
                  name="bio"
                  rows={3}
                  placeholder={`User Biography: ${showUser.bio}`}
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
                                onChange={(e) => setAvatar(e.target.files[0])}
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
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder={`First name: ${showUser.firstName}`}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black  focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                                style={{ backgroundColor: "#f6f6f6" }}
                            />
                        </div>
                        <div>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder={`Last name: ${showUser.lastName}`}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                                style={{ backgroundColor: "#f6f6f6" }}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="p-2">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            placeholder={`Email: ${showUser.email}`}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                    </div>

                    {/* Current Password */}
                    <div className="p-2">
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            placeholder="Current password"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                            style={{ backgroundColor: "#f6f6f6" }}
                        />
                    </div>

                    {/* New and Confirm Password */}
                    <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                placeholder="New password"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:text-black focus:border-[#8c0327] focus:ring-[#8c0327] focus:ring-opacity-50 p-2"
                                style={{ backgroundColor: "#f6f6f6" }}
                            />
                        </div>
                        <div>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder={`Confirmation password: ${showUser.password}`}
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