"use client";

import { RegaloType } from "../types";
import { useState } from "react";
import { updateRegalo, resetAll } from "../utils/apiCalls";
import { SubmitBtn } from "./SubmitBtn";

export const ProductForm = (props: { regalos: RegaloType[] }) => {
    const { regalos } = props;
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        setSelectedItems((prev) =>
            checked ? [...prev, id] : prev.filter((item) => item !== id)
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div>
            <h2 className="text-4xl font-bold mb-4">Baby Shower Gift List</h2>
            <form onSubmit={handleSubmit}>
                {regalos.map((item) => (
                    <div key={item.id}>
                        <input
                            type="checkbox"
                            id={item.id.toString()}
                            onChange={handleChange}
                            value={item.id}
                            className="mr-2"
                            checked={selectedItems.includes(item.id.toString())}
                        />
                        <label
                            htmlFor={item.id.toString()}
                            className="text-gray-700"
                        >
                            {item.item}
                        </label>
                        <span className="text-red-800 ml-5">{item.buyer}</span>
                        <span className="text-red-800 ml-5">
                            {`${item.purchased}`}
                        </span>
                    </div>
                ))}
                {/* <button type="submit">Submit</button> */}
            </form>
            <SubmitBtn selectedItems={selectedItems} />

            <button type="button" onClick={() => resetAll()}>
                Reset
            </button>
        </div>
    );
};
