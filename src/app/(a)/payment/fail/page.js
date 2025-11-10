import { Suspense } from "react";
import FailClient from "./failClient";

export default function FailPage() {
    return (
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
            <FailClient />
        </Suspense>
    );
}
