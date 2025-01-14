import { ProductType } from "../types";

export const ProductCard = (props: ProductType) => {
    return (
        <article>
            <h1>{props.product_name}</h1>
        </article>
    );
};
