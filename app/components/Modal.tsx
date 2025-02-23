"use client";

export const Modal = (props: {
    height?: number;
    width?: number;
    children: React.ReactNode;
}) => {
    return (
        <div
            className="relative z-20"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div
            // className={`h-80 w-72 fixed px-3 flex flex-col justify-center inset-0 m-auto z-10 bg-violet-100  shadow-xl rounded-md`}
            >
                {props.children}
            </div>
        </div>
    );
};
