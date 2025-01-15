import { ProductCard } from "./ProductCard";
import { productData } from "../data/productData";

export const ProductList = () => {
    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">Baby Shower Gift List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productData.map((item) => (
                    <ProductCard key={item.product_id} {...item} />
                ))}
            </div>
        </div>
    );
};
