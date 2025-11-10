'use client'

import {useEffect, useState} from "react";
import Cookies from "js-cookie";

export default function ShowUser() {
    const xsrfToken = Cookies.get("XSRF-TOKEN");

    const [user, setUser] = useState([]);

    useEffect(() => {
        const show = async () => {
            try {
                await fetch('https://backend-production-5727.up.railway.app/sanctum/csrf-cookie', {
                    credentials: "include"
                });
                const res = await fetch('https://backend-production-5727.up.railway.app/api/admin/users', {
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json',
                    }
                });
                const data = await res.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        };
        show();
    }, []);

    // فقط همون کاربر انتخاب‌شده ارسال میشه
    const handleSubmit = async (item) => {
        try {
            await fetch('https://backend-production-5727.up.railway.app/sanctum/csrf-cookie', {
                credentials: "include",
            });

            const res = await fetch('https://backend-production-5727.up.railway.app/api/admin/update-users', {
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': xsrfToken,
                },
                method: 'POST',
                body: JSON.stringify(item), // فقط یک کاربر
            });

            if (res.ok) {
                console.log('User updated successfully');
            } else {
                console.log('Update failed');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="text-gray-900 bg-gray-200">
            <div className="p-4 flex">
                <h1 className="text-3xl">Users</h1>
            </div>
            <div className="px-3 py-4 flex justify-center">
                <table className="w-full text-md bg-white shadow-md rounded mb-4">
                    <tbody>
                    <tr className="border-b">
                        <th className="text-left p-3 px-5">User Image</th>
                        <th className="text-left p-3 px-5"> Name</th>
                        <th className="text-left p-3 px-5"> Email</th>
                        <th className="text-left p-3 px-5"> Role</th>
                        <th></th>
                    </tr>
                    {user.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-orange-100 bg-gray-100">
                            <td className="p-3 px-5">
                                <img src={item.avatar} className={'w-18 h-18 rounded-full'} />
                            </td>
                            <td className="p-3 px-5">
                                <input
                                    type="text"
                                    value={item.name}
                                    className="bg-transparent border-b-2 border-gray-300 py-2"
                                    onChange={(e) => {
                                        const newName = e.target.value;
                                        setUser(prev => prev.map(u =>
                                            u.id === item.id ? {...u, name: newName} : u
                                        ));
                                    }}
                                />
                            </td>
                            <td className="p-3 px-5">
                                <input
                                    type="email"
                                    value={item.email}
                                    className="bg-transparent border-b-2 border-gray-300 py-2"
                                    onChange={(e) => {
                                        const newEmail = e.target.value;
                                        setUser(prev => prev.map(u =>
                                            u.id === item.id ? {...u, email: newEmail} : u
                                        ));
                                    }}
                                />
                            </td>
                            <td className="p-3 px-5">
                                <select
                                    value={item.role}
                                    className="bg-transparent border-b-2 border-gray-300 py-2"
                                    onChange={(e) => {
                                        const newRole = e.target.value;
                                        setUser(prev => prev.map(u =>
                                            u.id === item.id ? {...u, role: newRole} : u
                                        ));
                                    }}
                                >
                                    <option value="user">user</option>
                                    <option value="admin">admin</option>
                                </select>
                            </td>
                            <td className="p-3 px-5 flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => handleSubmit(item)} // فقط همین کاربر
                                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
