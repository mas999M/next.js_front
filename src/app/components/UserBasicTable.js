"use client"

import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Table, TableBody, TableCell, TableHeader, TableRow} from "./ui/table";
import Badge from "./ui/badge/Badge";


export default function UserBasicTable() {

    const [user , setUser] = useState([]);
    useEffect(() => {
        const users = async () => {
            try{
                const res = await fetch("https://backend-production-5727.up.railway.app/api/admin/users",{
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include",
                });
                const data = await res.json();
                setUser(data);
            }catch(err){
                console.error(err);
            }
        }
        users();
    },[])

    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
                <div className="min-w-[1102px]">
                    <Table>
                        {/* Table Header */}
                        <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
                            <TableRow>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    User
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Project Name
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Team
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Status
                                </TableCell>
                                <TableCell
                                    isHeader
                                    className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                                >
                                    Budget
                                </TableCell>
                            </TableRow>
                        </TableHeader>

                        {/* Table Body */}
                        <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">

                            {user.map((item, index) => {
                                return(
                                    <TableRow key={index}>
                                        <TableCell className="px-5 py-4 sm:px-6 text-start">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 overflow-hidden rounded-full">
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src={''}
                                                        alt={''}
                                                    />
                                                </div>
                                                <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        </span>
                                                    <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        </span>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {item.name}
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            {item.email}
                                            <div className="flex -space-x-2">
                                                {/*{order.team.images.map((teamImage, index) => (*/}
                                                <div

                                                    className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
                                                >
                                                    <Image
                                                        width={24}
                                                        height={24}
                                                        src={''}
                                                        alt={`Team member ${1}`}
                                                        className="w-full"
                                                    />
                                                </div>
                                                {/*))}*/}
                                            </div>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                                            <Badge
                                                size="sm"
                                                // color={
                                                //     order.status === "Active"
                                                //         ? "success"
                                                //         : order.status === "Pending"
                                                //             ? "warning"
                                                //             : "error"
                                                // }
                                            >
                                                {item.id}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                                        </TableCell>
                                    </TableRow>
                                )
                            })}


                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
