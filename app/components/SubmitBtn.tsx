"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Modal } from "./Modal";
import { PurchaseForm } from "./PurchaseForm";

export const SubmitBtn = (props: { selectedItems: string[] }) => {
    const router = useRouter();
    const handleOpen = () => {
        router.push(`${window.location.pathname}?modal=t`, {
            scroll: false,
        });
    };
    const modal = useSearchParams().get("modal");
    return (
        <>
            {modal === "t" && (
                <Modal>
                    <PurchaseForm selectedItems={props.selectedItems} />
                </Modal>
            )}

            <button
                className="z-20  flex items-center gap-2 text-xl p-4 bg-yellow-300 text-blue-800 font-bold rounded-xl hover:bg-yellow-400 hover:cursor-pointer"
                type="button"
                onClick={handleOpen}
            >
                Purchase
            </button>
        </>
    );
};