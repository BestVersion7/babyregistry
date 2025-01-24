import { RegaloType } from "../types";
import { BASE_URL } from "../lib/constants";

const regaloOrigin = `${BASE_URL}/api/regalo`;
const resetOrigin = `${BASE_URL}/api/reset`;

// const revalidateTime = 1;
const revalidateTime = 60 * 60 * 24;

export const getRegalos = async () => {
    const res = await fetch(regaloOrigin, {
        // next: { revalidate: revalidateTime },
    });
    const data: RegaloType[] = await res.json();
    return data;
};

export const getRegaloById = async (id: Number) => {
    const res = await fetch(`${regaloOrigin}?id=${id}`, {
        // next: { revalidate: revalidateTime },
    });
    const data: RegaloType[] = await res.json();
    return data;
};

export const createRegalo = async (body: RegaloType) => {
    const res = await fetch(regaloOrigin, {
        method: "post",
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
};

export const updateRegalo = async (
    body: Pick<RegaloType, "buyer">,
    id: string
) => {
    const res = await fetch(`${regaloOrigin}?id=${id}`, {
        method: "put",
        body: JSON.stringify(body),
    });
    const data = await res.json();
    return data;
};

export const resetAll = async () => {
    const res = await fetch(resetOrigin, {
        method: "put",
    });
    const data = await res.json();
    return data;
};
