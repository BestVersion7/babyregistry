"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Modal } from "./Modal";
import { PurchaseForm } from "./PurchaseForm";
import { RegaloType } from "../types";
import { Suspense } from "react";

export const SubmitBtn = (props: {
    selectedItems: Pick<RegaloType, "id" | "item">[];
}) => {
    const router = useRouter();
    const handleOpen = () => {
        router.push(`${window.location.pathname}?modal=t`, {
            scroll: false,
        });
    };
    const modal = useSearchParams().get("modal");
    return (
        <Suspense>
            {modal === "t" && (
                <Modal>
                    <PurchaseForm selectedItems={props.selectedItems} />
                </Modal>
            )}

            <button
                className="mt-4 w-full bg-coffee-600 text-white py-2 px-4 rounded hover:bg-coffee-500 transition duration-200"
                // className="z-20  flex items-center gap-2 text-xl p-4 bg-yellow-300 text-blue-800 font-bold rounded-xl hover:bg-yellow-400 hover:cursor-pointer"
                type="button"
                onClick={handleOpen}
                // disabled={props.selectedItems.length < 1}
            >
                Purchase
            </button>
        </Suspense>
    );
};
