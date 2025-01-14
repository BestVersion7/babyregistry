import { ProductCard } from "./components/ProductCard";
import { ProductData } from "./data/productdata";

export default function Home() {
    return (
        <div>
            {ProductData.map((item) => (
                <div key={item.product_id}>
                    <ProductCard {...item} />
                </div>
            ))}
        </div>
    );
}
