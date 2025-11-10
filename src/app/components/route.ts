import { NextResponse } from "next/server";

export async function GET() {
    try {
        // ابتدا CSRF cookie از Laravel بگیریم
        const csrfRes = await fetch("https://backend-production-5727.up.railway.app/sanctum/csrf-cookie", {
            credentials: "include",
        });

        const cookies = csrfRes.headers.get("set-cookie") ?? "";

        // درخواست user با همان cookie
        const userRes = await fetch("https://backend-production-5727.up.railway.app/api/user", {
            headers: {
                "Accept": "application/json",
                "Cookie": cookies,
            },
            credentials: "include",
        });

        const data = await userRes.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: "Error fetching user", error }, { status: 500 });
    }
}
