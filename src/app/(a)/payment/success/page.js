import { Suspense } from "react";
import SuccessClient from "./successClient";

export default function Success() {
    return (
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
            <SuccessClient />
        </Suspense>
    );
}
