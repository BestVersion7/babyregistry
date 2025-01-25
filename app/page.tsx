import { ProductForm } from "./components/ProductForm";
import { getRegalos } from "./utils/apiCalls";
import { Suspense } from "react";

export default async function Home() {
    const regalos = await getRegalos();
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <ProductForm regalos={regalos} />
            </Suspense>
        </main>
    );
}
