"use client";

import { useSearchParams } from "next/navigation";

export default function FailPage() {
    const params = useSearchParams();
    const message = params.get("message");

    return (
        <div>
            <h1>پرداخت ناموفق ❌</h1>
            {message && <p>پیام خطا: {message}</p>}
        </div>
    );
}
