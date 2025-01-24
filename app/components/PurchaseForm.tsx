"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { updateRegalo } from "../utils/apiCalls";

export const PurchaseForm = (props: { selectedItems: string[] }) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const msgRef = useRef<HTMLTextAreaElement>(null);

    const [completeForm, setCompleteForm] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            for (let i = 0; i < props.selectedItems.length; i++) {
                await updateRegalo(
                    {
                        buyer: `${nameRef.current?.value}`,
                    },
                    props.selectedItems[i]
                );
            }
            setCompleteForm(true);
        } catch (err) {
            alert(err);
        }
    };

    const handleClose = () => {
        router.push(window.location.pathname, { scroll: false });
    };
    return (
        <>
            {completeForm ? (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                        <p className="text-2xl font-semibold mb-4 text-coffee-800">
                            Success
                        </p>
                        <button
                            onClick={handleClose}
                            type="button"
                            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-8 shadow-lg rounded-lg w-96">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-4"
                        >
                            <h3
                                className="text-xl text-center font-semibold text-coffee-800"
                                id="modal-title"
                            >
                                Purchase
                            </h3>
                            <label
                                htmlFor="nameInput"
                                className="text-gray-700"
                            >
                                Name:
                            </label>
                            <input
                                id="nameInput"
                                className="w-full p-2 border border-gray-300 rounded"
                                title="name"
                                type="text"
                                ref={nameRef}
                                required
                            />
                            <label htmlFor="msgInput" className="text-gray-700">
                                Message:
                            </label>
                            <textarea
                                id="msgInput"
                                title="Message"
                                className="w-full h-24 p-2 border border-gray-300 rounded"
                                ref={msgRef}
                                required
                            />
                            <div className="flex justify-center gap-2">
                                <button
                                    type="submit"
                                    className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brown-500 hover:cursor-pointer"
                                >
                                    Submit
                                </button>
                                <button
                                    onClick={handleClose}
                                    type="button"
                                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
