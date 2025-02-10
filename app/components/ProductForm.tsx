"use client";

import { RegaloType } from "../types";
import { useState } from "react";
import { resetAll } from "../utils/apiCalls";
import { SubmitBtn } from "./SubmitBtn";

export const ProductForm = (props: { regalos: RegaloType[] }) => {
    const { regalos } = props;
    const [selectedItems, setSelectedItems] = useState<
        Pick<RegaloType, "id" | "item">[]
    >([]);
    const selectedItemsId = selectedItems.map((item) => item.id);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, value, id } = e.target;
        // const id = parseInt(e.target.id);
        const newValue = { id, item: value };
        setSelectedItems((prev) =>
            checked
                ? [...prev, newValue]
                : prev.filter((item) => item.id !== id)
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg flex flex-col h-[calc(100vh-16px)] ">
            <h2 className="text-4xl font-extrabold mb-3 text-center text-coffee-800">
                <span className="text-white bg-gradient-to-r from-teal-500 to-teal-700 px-4 py-2 rounded-full shadow-md">
                    Fredy & Evelyn
                </span>
                <br />
                <span className="text-lg text-gray-700 italic">
                    Lista de regalos para el baby shower
                </span>
            </h2>
            <form
                onSubmit={handleSubmit}
                //flex-grow
                className="overflow-auto border-t-2 pt-2"
            >
                {regalos.map((item) => (
                    <div key={item.id} className="flex py-2">
                        <input
                            type="checkbox"
                            id={item.id.toString()}
                            onChange={handleChange}
                            value={item.item}
                            className="mr-2 h-5 w-5 text-coffee-500 focus:ring-coffee-400 border-coffee-300 rounded"
                            checked={selectedItemsId.includes(item.id)}
                            disabled={item.purchased}
                        />

                        <label
                            htmlFor={item.id.toString()}
                            className=" text-gray-700"
                            // className={`grid grid-rows-2 text-gray-700 ${
                            //     item.purchased ? "line-through" : ""
                            // }`}
                        >
                            <span
                                className={`${
                                    item.purchased ? "line-through" : ""
                                } `}
                            >
                                {item.item}
                            </span>
                        </label>
                        {item.buyer && (
                            <span className="text-red-800 font-semibold ml-3">
                                {`(${item.buyer})`}
                            </span>
                        )}
                        {/* <span className="text-red-800 ml-5">
                            {`${item.purchased}`}
                        </span> */}
                    </div>
                ))}
            </form>
            <SubmitBtn selectedItems={selectedItems} />
            {process.env.NODE_ENV === "development" && (
                <button
                    type="button"
                    onClick={() => resetAll()}
                    className="mt-2 w-full text-coffee-600 border border-coffee-600 py-2 px-4 rounded hover:bg-coffee-100 transition duration-200"
                >
                    Reset
                </button>
            )}
        </div>
    );
};
