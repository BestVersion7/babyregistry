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
                <div className=" text-center">
                    <p>Success.</p>
                    <button
                        onClick={handleClose}
                        type="button"
                        className=" rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                    >
                        Close
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    // className="flex flex-col justify-between"
                >
                    <h3
                        className="text-xl text-center font-semibold"
                        id="modal-title"
                    >
                        Contact me
                    </h3>
                    <label htmlFor="nameInput">Name:</label>
                    <br />
                    <input
                        id="nameInput"
                        className="w-full"
                        title="name"
                        type="text"
                        ref={nameRef}
                        required
                    />
                    <br />
                    <label htmlFor="msgInput">Message:</label>
                    <br />
                    <textarea
                        id="msgInput"
                        title="Message"
                        className="w-full h-24"
                        ref={msgRef}
                        required
                    />

                    <div className="flex justify-center gap-1">
                        <button
                            type="submit"
                            className="  rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 hover:cursor-pointer"
                        >
                            Submit
                        </button>
                        <button
                            onClick={handleClose}
                            type="button"
                            className=" rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};