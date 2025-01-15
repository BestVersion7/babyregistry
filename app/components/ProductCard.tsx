import { ProductType } from "../types";
import Image from "next/image";

export const ProductCard = (props: ProductType) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:bg-gray-200 hover:cursor-pointer">
            <img
                src={props.images[0]}
                alt={props.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-2xl text-purple-600 font-semibold">
                    {props.name}
                </h2>
                <p className="text-gray-700">
                    Price: ${props.default_price}.00
                </p>
                <a href={props.name} className="text-blue-500 hover:underline">
                    Buy now
                </a>
                <div className="p-4">
                    <input
                        title="gift"
                        type="radio"
                        name="gift"
                        value={props.product_id}
                        className="mr-2"
                    />
                    I'll bring this
                </div>
            </div>
        </div>
    );
};
