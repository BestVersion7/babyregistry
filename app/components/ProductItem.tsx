"use client";
import { RegaloType } from "../types";

export const ProductItem = (props: {
    regalos: RegaloType;
    changeRegalo: (e: number) => void;
}) => {
    const { regalos, changeRegalo } = props;

    const { id, item } = regalos;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeRegalo(Number(e.target.value));
    };
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id={item}
                onChange={handleChange}
                value={id}
                className="mr-2"
            />
            <label htmlFor={item} className="text-gray-700">
                {item}
            </label>
        </div>
    );
};
