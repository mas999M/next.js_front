"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
    const params = useSearchParams();
    const refId = params.get("ref_id");

    return (
        <div>
            <h1>پرداخت موفق 🎉</h1>
            {refId && <p>کد تراکنش شما: {refId}</p>}
        </div>
    );
}
