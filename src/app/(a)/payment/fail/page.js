"use client";


export default function FailPage() {
    const message = params.get("message");

    return (
        <div>
            <h1>پرداخت ناموفق ❌</h1>
            {message && <p>پیام خطا: {message}</p>}
        </div>
    );
}
